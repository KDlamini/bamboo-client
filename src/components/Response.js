import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

function Response({ message }) {
  const [show, setShow] = useState(!!message);

  if (!show) return null;

  return (
    <Alert variant="success" onClose={() => setShow(false)} dismissible>
      <p className="my-0 py-0">{message}</p>
    </Alert>
  );
}

export default Response;
