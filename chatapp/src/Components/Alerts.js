import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import "./myStyles.css"

export default function BasicAlert() {
  return (
      <Alert className='alerts' severity="error" variant="filled">Invalid UserName or Password</Alert>
  );
}
