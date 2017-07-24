import PropTypes from 'prop-types';
import React from 'react';
import Link from 'react-router-dom/Link';

/**
 * <Linker /> is a react router wrapper
 * It is specifically tailored to meet our needs
 * It helps spread the onClick ref of each link into the state when changing routes
 */
const Linker = (props) => {
  const { data, isExternal, title, className, objKey, children, ...rest } = props;
  let linker;

  // TODO need to be improved to make a same code between linker and helper
  if (isExternal) {
    linker = (
      <a href={data.onClick.URLWebsite} className={className} target="_blank">
        {children}
      </a>
    );
  } else {
    linker = (
      <Link
        className={className}
        to={{
          pathname: data[objKey] && data[objKey].path ? data[objKey].path : null,
          state: data[objKey] ? { [objKey]: data[objKey] } : null,
        }}
        title={title}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  return linker;
};

/**
 * Props
 * @type {object} data      - obj containing the onClick key to spread in state
 * @type {jsx}    children  - DOM children elements
 * @type {string} title     - title to pass down to <Link> component
 * @type {string} className - classes to pass down to <Link> component
 * @type {string} objKey    - name of key to use on {data} to spread in state (eg: ...data[objKey])
 */
Linker.propTypes = {
  data: PropTypes.shape({}).isRequired,
  isExternal: PropTypes.bool,
  children: PropTypes.node,
  title: PropTypes.string,
  className: PropTypes.string,
  objKey: PropTypes.string,
};

Linker.defaultProps = {
  objKey: 'onClick',
};

export default Linker;
