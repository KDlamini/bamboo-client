import React, { useState, useEffect } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, Form, FormGroup,
  Label, Input, NavLink, Alert,
} from 'reactstrap';
import { connect } from 'react-redux';
import { register } from '../../redux/actions/users';
import { clearErrors } from '../../redux/actions/errors';
import registerImage from '../../assets/ModernCabinet.gif';

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

      <Modal isOpen={isModalOpen} toggle={handleToggle} className="modal-lg">
        <ModalHeader toggle={handleToggle} className="border-0">
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
              <div className="modal-form-wrapper bg-light p-2 w-100 rounded-2">
                <h5 className="text-center text-secondary mb-4">Register new account</h5>
                {message ? <Alert color="danger">{message}</Alert> : null}
                <Form className="p-1" onSubmit={handleOnSubmit}>
                  <FormGroup>
                    <Label for="name" className="description-text">Name</Label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      className="mb-3"
                      onChange={(e) => setName(e.target.value)}
                    />

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
                      <Button color="dark" style={{ marginTop: '2rem' }} block>
                        Register
                      </Button>
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
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { register, clearErrors })(
  RegisterModal,
);
