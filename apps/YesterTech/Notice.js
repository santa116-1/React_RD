import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import 'YesterTech/Notice.scss'

function Notice({ children, type = 'default' }) {
  return <div className={classnames('notice', `notice-type-${type}`)}>{children}</div>
}

Notice.propTypes = {
  type: PropTypes.oneOf(['default', 'error', 'success'])
}

export default Notice
