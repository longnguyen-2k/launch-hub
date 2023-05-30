import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/role/role.scss';

const RolesJob = ({ text, number_type = undefined, number = 0, className = '' }) => {
  // Convert the number prop to a number explicitly
  const parsedNumber = typeof number === 'string' ? parseFloat(number) : number;

  return (
    <div className={className}>
      <div className='block__role_title'>
        <p>{text}</p>
      </div>
      {number_type && (
        <div className='block__number_label'>
          +{parsedNumber}
        </div>
      )}
    </div>
  );
};

RolesJob.propTypes = {
  text: PropTypes.string.isRequired,
  number_type: PropTypes.bool,
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
};

export default RolesJob;