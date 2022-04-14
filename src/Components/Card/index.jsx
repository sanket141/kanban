import React, { useState } from "react";
import PropTypes from 'prop-types';
import { MenuIcon } from "../../svgs";
import Dropdown from "../Dropdown";
import {
    CardWrapper,
    Menu,
    Title,
} from './Card.style';

function Card(props) {

	const { card, boardId, dragEnter, dragEnd, removeCard } = props;
	const { id, title } = card;

	const [showDropdown, setShowDropdown] = useState(false);

	return (
		<CardWrapper
			draggable
			onDragEnd={() => dragEnd(boardId, id)}
			onDragEnter={() => dragEnter(boardId, id)}
		>
			<Title>{title}</Title>
			<Menu onClick={(event) => {
				event.stopPropagation();
				setShowDropdown(true);
			}}>
				<MenuIcon />
				{showDropdown && (
					<Dropdown onClose={() => setShowDropdown(false)}>
						<p onClick={() => removeCard(boardId, id)}>
							Delete Card
						</p>
					</Dropdown>
				)}
			</Menu>
		</CardWrapper>
	);
}

Card.propTypes = {
	card: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
	}).isRequired,
	boardId: PropTypes.number.isRequired,
    dragEnter: PropTypes.func.isRequired,
    dragEnd: PropTypes.func.isRequired,
    removeCard: PropTypes.func.isRequired,
};

export default Card;
