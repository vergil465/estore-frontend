import React from 'react';

const ErrorField = ({ errors }) => {
  const errorMessages = [];
  errors.forEach((message) => {
    errorMessages.push(<li key={`error_${message}`}>{message}</li>);
  });
  return <ul>{errorMessages}</ul>;
};

export default ErrorField;
