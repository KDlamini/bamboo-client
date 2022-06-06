import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';

function Response({ message }) {
  const { status, control } = message;
  const [show, setShow] = useState(status.length > 0);

  useEffect(() => {
    setShow(status.length > 0);
  }, [control]);

  if (!show) return null;

  return (
    <Alert variant="success" onClose={() => setShow(false)} dismissible>
      <p className="my-0 py-0">{status}</p>
    </Alert>
  );
}

export default Response;
