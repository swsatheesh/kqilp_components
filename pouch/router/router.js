import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { HashRouter } from 'react-router-dom';

class Router extends Component {
    render() {
        return (
            <HashRouter>
                {Children.only(this.props.children)}
            </HashRouter>
        );
    }
}

Router.propTypes = {
    children: PropTypes.element,
};

export default Router;