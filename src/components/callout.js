import React from 'react';
import Alert from "react-bootstrap/Alert"
 
export default function Callout({ type = 'info', title, children }) {

  return (
    <Alert variant={type}>
    <Alert.Heading>{title}</Alert.Heading>
    <markdown>  
      {children}
    </markdown>
    </Alert>
  );
}