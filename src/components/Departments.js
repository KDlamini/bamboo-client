import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { DropdownButton, ButtonGroup, Dropdown } from 'react-bootstrap';
import { getPromotions, filterDepartment } from '../redux/actions/products';
import { departmentsList } from './data';

const Departments = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const departmentKeys = Object.keys(departmentsList);

  return (
    <div className="d-flex flex-column border ms-3">
      <h2 className="title text-light p-2 bg-dark">Departments</h2>
      {
        departmentKeys.map((department) => (
          <DropdownButton
            as={ButtonGroup}
            key={department}
            id="dropdown-button-drop-end"
            drop="end"
            variant="light"
            title={department}
          >
            {
              departmentsList[department].map((subDepartment, index) => (
                <Dropdown.Item
                  key={subDepartment}
                  eventKey={index}
                  onClick={() => {
                    dispatch(filterDepartment(subDepartment));
                    navigate('/query');
                  }}
                >
                  {subDepartment}
                </Dropdown.Item>
              ))
            }
          </DropdownButton>
        ))
      }
      <NavLink
        to="/query"
        className="promotions text-center text-light mt-3 px-3 py-2 border"
        onClick={() => dispatch(getPromotions())}
      >
        Promotions
      </NavLink>
    </div>
  );
};

export default Departments;
