import React, { useState, useEffect } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, Form, FormGroup,
  Label, Input, NavLink, Alert,
} from 'reactstrap';
import { connect } from 'react-redux';
import { register, registerToggle } from '../../redux/actions/users';
import registerImage from '../../assets/ModernCabinet.gif';
// eslint-disable-next-line import/no-cycle
import LoginModal from './LoginModal';

const RegisterModal = ({
  error, register, registerToggle, isModal,
}) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (error.id === 'REGISTER_FAIL') {
      setMessage(error.message);
    } else {
      setMessage(null);
    }
  }, [error]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      surname,
      email,
      password,
    };

    // Attempt to register & login
    register(user);
  };

  return (
    <div>
      <NavLink onClick={registerToggle} href="#register" className="nav-link">
        Register
      </NavLink>

      <Modal isOpen={isModal} toggle={registerToggle} className="modal-lg">
        <ModalHeader toggle={registerToggle} className="border-0">
          <b>Shopcart</b>
        </ModalHeader>
        <ModalBody className="d-flex align-items-center">
          <div className="row rounded-1">
            <div className="col-md-7 p-0 rounded-1">
              <div className="details-img-wrapper rounded-1">
                <img src={registerImage} alt="login-banner" className="details-img rounded-1" />
              </div>
            </div>

            <div className="col-md-5 p-0 rounded-1">
              <div className="modal-form-wrapper bg-light p-2 pb-0 w-100 rounded-2">
                <h5 className="text-center text-secondary mb-4">Register new account</h5>
                {message ? <Alert color="danger">{message}</Alert> : null}
                <Form className="p-1 pb-0" onSubmit={handleOnSubmit}>
                  <FormGroup>
                    <Label for="name" className="description-text">First Name</Label>
                    <Input
                      type="text"
                      name="name"
                      id="register-name"
                      className="mb-3"
                      onChange={(e) => setName(e.target.value)}
                    />

                    <Label for="surname" className="description-text">Last Name</Label>
                    <Input
                      type="text"
                      name="surname"
                      id="register-surname"
                      className="mb-3"
                      onChange={(e) => setSurname(e.target.value)}
                    />

                    <Label for="email" className="description-text">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="register-email"
                      className="mb-3"
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <Label for="password" className="description-text">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="register-password"
                      className="mb-3"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="actions">
                      <Button color="dark" style={{ marginTop: '2rem' }} block>
                        Register
                      </Button>
                    </div>
                    <div className="description-text d-flex mt-2">
                      <p className="p-2">Already have an account?</p>
                      {' '}
                      <LoginModal />
                    </div>
                  </FormGroup>
                </Form>
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
  isModal: state.auth.isRegisterToggle,
});

export default connect(mapStateToProps, { register, registerToggle })(
  RegisterModal,
);
