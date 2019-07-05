import React from 'react';
import PropTypes from 'prop-types';

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

ErrorField.propTypes = {
  errors: PropTypes.oneOfType([PropTypes.array]),
};

ErrorField.defaultProps = {
  errors: [],
};

export default ErrorField;
