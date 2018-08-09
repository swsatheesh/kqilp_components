import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const menu = {
    foodChain: {
        name: 'Food Chain',
        id: 'foodChain',
        bgColor: '#339999'
    },
    backgroundInfo: {
        name: 'Background Info',
        id: 'backgroundInfo',
        bgColor: '#CC6600'
    },
    habitatAdaptation: {
        name: 'Habitat Adaptation',
        id: 'habitatAdaptation',
        bgColor: '#000066'
    },
    lifeCycle: {
        name: 'Life Cycle',
        id: 'lifeCycle',
        bgColor: '#009900'
    },
    anatomy: {
        name: 'Anatomy',
        id: 'anatomy',
        bgColor: '#3333FF'
    },
    dissectionLab: {
        name: 'Dissection Lab',
        id: 'dissectionLab',
        bgColor: '#666666'
    },
    simulation: {
        name: 'Simulation',
        id: 'simulation',
        bgColor: '#990000'
    },
    evaluation: {
        name: 'Evaluation',
        id: 'evaluation',
        bgColor: '#993399'
    },
    labNotes: {
        name: 'Lab Notes',
        id: 'labNotes',
        bgColor: '#999900'
    }
};

const MainMenu = () => {
    return (
        <div className={'col-md-12'}>
            {
                Object.keys(menu).map((page) => (
                    <div key={page} className={'col-md-4 main-menu-link'}>
                        <span style={{ backgroundColor: menu[page].bgColor }}>
                            <Link to={`/assignment/${page}`}>{menu[page].name}</Link>
                        </span>
                    </div>
                ))
            }
        </div>
    );
};

MainMenu.propTypes = {
    
};

export default MainMenu;