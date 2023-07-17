import { useState } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ClickStatusNav ({ routeItem, item }) {

    const [ isActive, setIsActive ] = useState(false);

    const handleClick = () => {
        setIsActive(true);
    };

    const handleRelease = () => {
        setIsActive(false);
    };

    return(
        <li
            className={isActive ? 'active' : ''}
            onMouseDown={handleClick}
            onMouseUp={handleRelease}>
                <Link to={routeItem}>{item}</Link>
        </li>
    );
}
// <-------validación de tipo para la propiedad----------->

ClickStatusNav.propTypes = {
    routeItem: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
};

export default ClickStatusNav;