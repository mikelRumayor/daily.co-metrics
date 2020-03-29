import React from 'react'
import PropTypes from 'prop-types'
import styled, { theme } from '@styling'

const Unauthorized = ({ className }) => (
  <span className={className}>
    You are not authorized to take this call
  </span>

)

Unauthorized.propTypes = {
  className: PropTypes.string
}

export default styled(Unauthorized)`
  ${theme('--font-xlarge')};
`;