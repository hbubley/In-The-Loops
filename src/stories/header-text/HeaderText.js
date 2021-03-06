import React from 'react'
import PropTypes from 'prop-types';
import styles from './header-text.module.css';
export const HeaderText = ({ label }) => {
    return (
        <h1 className={styles.title}>
            {label}
        </h1>
    )
}
HeaderText.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    variant: PropTypes.oneOf(['primary', 'secondary', 'light']),
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
  };

