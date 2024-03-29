import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { deleteAlert } from '../../redux/actions/cart';

function Response({ message }) {
  const { status, control } = message;
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
        dispatch(deleteAlert());
      }, 5000);
    }
  }, [status, control]);

  if (!show) return null;

  return (
    <Alert variant="success" onClose={() => setShow(false)} dismissible>
      <p className="my-0 py-0">{status}</p>
    </Alert>
  );
}

export default Response;
