import React, { useState } from "react";
import PropTypes from 'prop-types';
import { MenuIcon } from "../../svgs";
import Dropdown from "../Dropdown";
import CardInfo from "../CardInfo";
import {
    CardWrapper,
    Menu,
    Title,
} from './Card.style';

function Card(props) {

	const { card, boardId, dragEnter, dragEnd, removeCard } = props;
	const { id, title } = card;

	const [showDropdown, setShowDropdown] = useState(false);
	const [showModal, setShowModal] = useState(false);

	return (
		<React.Fragment>
			<CardWrapper
				draggable
				onDragEnd={() => dragEnd(boardId, id)}
				onDragEnter={() => dragEnter(boardId, id)}
				onClick={() => setShowModal(true)}
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
			{showModal && (
				<CardInfo
					onClose={() => setShowModal(false)}
					title={title}
				/>
			)}
		</React.Fragment>
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
