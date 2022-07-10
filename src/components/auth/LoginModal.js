import React, { useState, useEffect } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, Form,
  FormGroup, Label, Input, NavLink, Alert,
} from 'reactstrap';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/users';
import { clearErrors } from '../../redux/actions/errors';

const LoginModal = ({
  isAuthenticated, error, login, clearErrors,
}) => {
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const handleToggle = () => {
    // Clear errors
    clearErrors();
    setModal(!modal);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const user = { email, password };

    // Attempt to login
    login(user);
  };

  useEffect(() => {
    // Check for register error
    if (error.id === 'LOGIN_FAIL') {
      setMessage(error.message);
    } else {
      setMessage(null);
    }
  }, [error]);

  // If authenticated, close modal
  if (modal && isAuthenticated) handleToggle();

  return (
    <div>
      <NavLink onClick={handleToggle} href="#" className="nav-link">
        Login
      </NavLink>

      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>Login</ModalHeader>
        <ModalBody>
          {message ? <Alert color="danger">{message}</Alert> : null}
          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="mb-3"
                onChange={(e) => setEmail(e.target.value)}
              />

              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                color="dark"
                style={{ marginTop: '2rem' }}
                block
                onClick={handleOnSubmit}
              >
                Login
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { login, clearErrors })(LoginModal);
