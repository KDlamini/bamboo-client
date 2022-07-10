import React from 'react';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/users';

export const destroySession = ({ logout }) => (
  <div>
    <NavLink onClick={logout} className="nav-link" href="#">
      Logout
    </NavLink>
  </div>
);

export default connect(null, { logout })(destroySession);
