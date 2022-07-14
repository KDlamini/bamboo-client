import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/users';

export const destroySession = ({ logout }) => {
  const navigate = useNavigate();

  return (
    <div>
      <NavLink onClick={() => { logout(); navigate('/'); }} className="nav-link" href="#">
        Logout
      </NavLink>
    </div>
  );
};

export default connect(null, { logout })(destroySession);
