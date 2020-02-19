import React from 'react'
import {Link} from 'react-router-dom';

function Budget({ budget }) {

    return (
        <Link to={budget.links.self}>
            <li>
                {budget.name}
            </li>
        </Link>
    );
}

export default Budget;