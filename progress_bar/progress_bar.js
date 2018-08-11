import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ className, now, min, max, striped, active, labelVisibility, children }) => {
    const strips = striped ? 'progress-bar-striped' : '';
    const activeStrips = active ? 'active' : '';
    return (
        <div className={`progress ${className}`}>
            <div className={`progress-bar ${strips} ${activeStrips}`} now={now} min={min} max={max} style={{ width: `${now}%` }}>
                <span className={labelVisibility ? '' : 'sr-only'}>{children ? children : `${now}%`}</span>
            </div>
        </div>
    );
}

ProgressBar.defaultProps = {
    className: '',
    now: 50,
    min: 0,
    max: 100,
    striped: false,
    active: false,
    labelVisibility: true,
    children: ''
};

ProgressBar.propTypes = {
    className: PropTypes.string,
    now: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    striped: PropTypes.bool,
    active: PropTypes.bool,
    labelVisibility: PropTypes.bool,
    children: PropTypes.string
};

export default ProgressBar;