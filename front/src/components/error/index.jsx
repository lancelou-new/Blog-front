import React from 'react';
import Redbox from 'redbox-react';
import PropTypes from 'prop-types';

const isProd = process.env.NODE_ENV === 'production';

const CustomErrorReporter = ({ error }) =>
  (!isProd ? <Redbox error={error} /> : console.error(error) && null);

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired,
};

export default CustomErrorReporter;
