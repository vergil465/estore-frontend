import React from 'react';

const ErrorField = ({ errors }) => {
  const errorMessages = [];

  Array.from(new Set(errors)).forEach((message, index) => {
    if (!errorMessages.includes(message)) {
      errorMessages.push(
        <li
          className="error-message"
          key={`error_${message + index}`}
        >
          {message}
        </li>
      );
    }
  });
  return <ul className="error-list">{errorMessages}</ul>;
};

export default ErrorField;
