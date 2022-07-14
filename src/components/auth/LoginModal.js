import React, { useState, useEffect } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, Form,
  FormGroup, Label, Input, NavLink, Alert,
} from 'reactstrap';
import { connect } from 'react-redux';
import { login, loginToggle } from '../../redux/actions/users';
import loginImage from '../../assets/ModernCabinet.gif';
// eslint-disable-next-line import/no-cycle
import RegisterModal from './RegisterModal';

const LoginModal = ({
  error, login, loginToggle, isModal,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

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

  return (
    <div>
      <NavLink onClick={loginToggle} href="#" className="nav-link">
        Login
      </NavLink>

      <Modal isOpen={isModal} toggle={loginToggle} className="modal-lg">
        <ModalHeader toggle={loginToggle} className="border-0">
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
                      id="login-email"
                      className="mb-3"
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <Label for="password" className="description-text">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="login-password"
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
                    <div className="description-text d-flex mt-2">
                      <p className="p-2">Don&apos;t have an account?</p>
                      {' '}
                      <RegisterModal />
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
  error: state.error,
  isModal: state.auth.isLoginToggle,
});

export default connect(mapStateToProps, { login, loginToggle })(LoginModal);
