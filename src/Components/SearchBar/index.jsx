import React, { useState } from "react";
import {
    Input,
    List,
    ListItem,
} from "./SearchBar.style";
import PropTypes from 'prop-types';
import CardInfo from "../CardInfo";

function SearchBar(props) {

    const { boards } = props;
    const [ filteredCards, setFilteredCards ] = useState([]);
    const [ showModal, setShowModal ] = useState(false);
    const [ selectedCardTitle, setSelectedCardTitle ] = useState("");

    function textChange(e){
        const searchText = e.target.value;
        
        if(searchText !== ""){
            const filters = [];

            boards.map(board => {
                filters.push(...board.cards.filter(card => card.title.includes(searchText)));
                return board;
            });

            setFilteredCards(filters);
        } else{
            setFilteredCards([]);
        }
    }

    function onClick(title){

        setSelectedCardTitle(title);
        setShowModal(true);
    }

    function onClose(){

        setSelectedCardTitle("title");
        setShowModal(false);
    }

    return (
        <React.Fragment>
            <Input type="text" placeholder="Search" onChange={textChange}/>
            <List>
                {filteredCards.map(({id, title}) => (
                    <ListItem key={id} onClick={() => onClick(title)}>{title}</ListItem>
                ))}
            </List>
			{showModal && (
				<CardInfo
					onClose={onClose}
					title={selectedCardTitle}
				/>
			)}
        </React.Fragment>
    );
}

SearchBar.propTypes = {
	boards: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            cards: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number,
                    title: PropTypes.string,
                })
            ),
	    })
    ).isRequired,
};

export default SearchBar;
