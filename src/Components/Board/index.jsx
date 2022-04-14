import React, { useState } from "react";
import PropTypes from 'prop-types';
import { MenuIcon } from "../../svgs";
import Card from "../Card";
import Dropdown from "../Dropdown";
import AddButton from "../AddButton";
import {
  BoardWrapper,
  Header,
  Title,
  Menu,
  BoardCards,
} from './Board.style';

function Board(props) {

	const { board, removeBoard, removeCard, dragEnter, dragEnd, addCard } = props;
	
	const [showDropdown, setShowDropdown] = useState(false);

	return (
		<BoardWrapper>
			<Header>
				<Title>
					{board.title}
					<span>{board.cards.length}</span>
				</Title>
				<Menu onClick={() => setShowDropdown(true)}>
					<MenuIcon />
					{showDropdown && (
						<Dropdown onClose={() => setShowDropdown(false)}>
							<p onClick={() => removeBoard()}>Delete Board</p>
						</Dropdown>
					)}
				</Menu>
			</Header>
			<BoardCards>
				{board.cards.map((item) => (
					<Card
						key={item.id}
						card={item}
						boardId={board.id}
						removeCard={removeCard}
						dragEnter={dragEnter}
						dragEnd={dragEnd}
					/>
				))}
				<AddButton
					text="Add Card"
					placeholder="Enter Card Title"
					onSubmit={(value) => addCard(board.id, value)}
				/>
			</BoardCards>
		</BoardWrapper>
	);
}

Board.propTypes = {
	board: PropTypes.shape({
		title: PropTypes.string,
		cards: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number,
				title: PropTypes.string,
			})
		),
	}).isRequired,
    dragEnter: PropTypes.func.isRequired,
    dragEnd: PropTypes.func.isRequired,
    removeBoard: PropTypes.func.isRequired,
    addCard: PropTypes.func.isRequired,
    removeCard: PropTypes.func.isRequired,
};

export default Board;
