import React, { useState, useEffect } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, Form,
  FormGroup, Label, Input, NavLink, Alert,
} from 'reactstrap';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/users';
import { clearErrors } from '../../redux/actions/errors';
import loginImage from '../../assets/ModernCabinet.gif';

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

      <Modal isOpen={modal} toggle={handleToggle} className="modal-lg">
        <ModalHeader toggle={handleToggle} className="border-0">
          <b>Shopcart</b>
        </ModalHeader>
        <ModalBody className="d-flex align-items-center">
          <div className="row rounded-1">
            <div className="col-md-5 p-0 rounded-1">
              <div className="modal-form-wrapper bg-light p-2 w-100 rounded-2">
                <h5 className="text-center text-secondary mb-4">Login to your account</h5>
                {message ? <Alert color="danger">{message}</Alert> : null}
                <Form className="p-1">
                  <FormGroup>
                    <Label for="email" className="description-text">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      className="mb-3"
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <Label for="password" className="description-text">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      className="mb-3"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="actions">
                      <Button
                        color="dark"
                        style={{ marginTop: '2rem' }}
                        block
                        onClick={handleOnSubmit}
                      >
                        Login
                      </Button>
                    </div>
                  </FormGroup>
                </Form>
              </div>
            </div>
            <div className="col-md-7 p-0 rounded-1">
              <div className="details-img-wrapper rounded-1">
                <img src={loginImage} alt="login-banner" className="details-img rounded-1" />
              </div>
            </div>
          </div>
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
