import React, { useState, useEffect } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, Form, FormGroup,
  Label, Input, NavLink, Alert,
} from 'reactstrap';
import { connect } from 'react-redux';
import { register } from '../../redux/actions/users';
import { clearErrors } from '../../redux/actions/errors';

const RegisterModal = ({
  isAuthenticated, error, register, clearErrors,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const handleToggle = () => {
    clearErrors();
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (error.id === 'REGISTER_FAIL') {
      setMessage(error.message);
    } else {
      setMessage(null);
    }
  }, [error]);

  // If authenticated, close modal
  if (isModalOpen && isAuthenticated) handleToggle();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
    };

    // Attempt to register & login
    register(user);
  };

  return (
    <div>
      <NavLink onClick={handleToggle} href="#register" className="nav-link">
        Register
      </NavLink>

      <Modal isOpen={isModalOpen} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>Register</ModalHeader>
        <ModalBody>
          {message ? <Alert color="danger">{message}</Alert> : null}
          <Form onSubmit={handleOnSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="mb-3"
                onChange={(e) => setName(e.target.value)}
              />

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
              <Button color="dark" style={{ marginTop: '2rem' }} block>
                Register
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

export default connect(mapStateToProps, { register, clearErrors })(
  RegisterModal,
);
