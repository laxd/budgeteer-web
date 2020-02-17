import React, { useContext } from 'react'
import {Link} from 'react-router-dom';

const Budget = props => {

    return (
        <Link to={props.budget.links.self}>
            <li>
                {props.budget.name}
            </li>
        </Link>
    );
};

export default Budget;