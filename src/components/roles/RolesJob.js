import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/role/role.scss';

const RolesJob = ({ text, number = undefined, className = '' }) => {
  return (
    <div className={className}>
      <div className='block__role_title'>
        <p>{text}</p>
      </div>
      {number !== undefined && (
        <div className='block__number_label'>
         +{number ? number : '0'}
        </div>
      )}
    </div>
  );
};

RolesJob.propTypes = {
  text: PropTypes.string.isRequired,
  number: PropTypes.bool,
  className: PropTypes.string,
};

export default RolesJob;