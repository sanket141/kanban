import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import DropDownWrapper from './Dropdown.style';

function Dropdown(props) {

	const { onClose, children } = props;

    const dropdownRef = useRef();

    function handleClick(event) {

		if (dropdownRef && !dropdownRef.current?.contains(event.target)) {
			onClose();
		}
    }

    useEffect(() => {

		document.addEventListener("click", handleClick);

		return () => {
			document.removeEventListener("click", handleClick);
		};
    });

    return (
		<DropDownWrapper ref={dropdownRef}>
			{children}
		</DropDownWrapper>
    );
}

Dropdown.propTypes = {
    onClose: PropTypes.func.isRequired,
	children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
};

export default Dropdown;
