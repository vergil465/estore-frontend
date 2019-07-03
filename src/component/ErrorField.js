import React from 'react';

const ErrorField = ({ errors }) => {
  const errorMessages = [];
  errors.forEach((message) => {
    errorMessages.push(
      <li
        className="error-message"
        key={`error_${message}`}
      >
        {message}
      </li>
    );
  });
  return <ul className="error-list">{errorMessages}</ul>;
};

export default ErrorField;
