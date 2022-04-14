import React, { useState } from "react";
import Board from "./Board";
import AddButton from "./AddButton";
import {
    KanbanWrapper,
    Header,
    BoardsContainer,
    Boards,
    AddBoardContainer,
} from "./Kanban.sytle";

function Kanban() {

    const [boards, setBoards] = useState([]);
    const [targetCard, setTargetCard] = useState({
        boardId: "",
        cardId: "",
    });

    function addboardHandler(name) {

        const tempBoards = [...boards];
        tempBoards.push({
            id: Date.now() + Math.random() * 2,
            title: name,
            cards: [],
        });
        setBoards(tempBoards);
    }

    function removeBoardHandler(id) {

        const index = boards.findIndex((item) => item.id === id);
        if (index < 0) return;

        const tempBoards = [...boards];
        tempBoards.splice(index, 1);
        setBoards(tempBoards);
    }

    function addCardHandler(id, title) {

        const index = boards.findIndex((item) => item.id === id);
        if (index < 0) return;

        const tempBoards = [...boards];
        tempBoards[index].cards.push({
            id: Date.now() + Math.random() * 2,
            title,
        });
        setBoards(tempBoards);
    }

    function removeCardHandler(boardId, cardId) {

        const index = boards.findIndex((item) => item.id === boardId);
        if (index < 0) return;

        const tempBoards = [...boards];
        const cards = tempBoards[index].cards;

        const cardIndex = cards.findIndex((item) => item.id === cardId);
        if (cardIndex < 0) return;

        cards.splice(cardIndex, 1);
        setBoards(tempBoards);
    }

    function dragEnter(boardId, cardId) {

        if (targetCard.cardId === cardId) return;

        setTargetCard({
            boardId,
            cardId,
        });
    }

    function dragEnd(boardId, cardId) {

        let sourceBoardIndex, sourceCardIndex, targetBoardIndex, targetCardIndex;

        sourceBoardIndex = boards.findIndex((item) => item.id === boardId);
        if (sourceBoardIndex < 0) return;

        sourceCardIndex = boards[sourceBoardIndex]?.cards?.findIndex((item) => item.id === cardId);
        if (sourceCardIndex < 0) return;

        targetBoardIndex = boards.findIndex((item) => item.id === targetCard.boardId);
        if (targetBoardIndex < 0) return;

        targetCardIndex = boards[targetBoardIndex]?.cards?.findIndex((item) => item.id === targetCard.cardId);
        if (targetCardIndex < 0) return;

        const tempBoards = [...boards];
        const sourceCard = tempBoards[sourceBoardIndex].cards[sourceCardIndex];
        tempBoards[sourceBoardIndex].cards.splice(sourceCardIndex, 1);
        tempBoards[targetBoardIndex].cards.splice(targetCardIndex, 0, sourceCard);
        setBoards(tempBoards);

        setTargetCard({
            boardId: "",
            cardId: "",
        });
    }

    return (
        <KanbanWrapper>
            <Header>
                <h1>Kanban Board</h1>
            </Header>
            <BoardsContainer>
                <Boards>
                    {boards.map((item) => (
                        <Board
                            key={item.id}
                            board={item}
                            addCard={addCardHandler}
                            removeCard={removeCardHandler}
                            removeBoard={() => removeBoardHandler(item.id)}
                            dragEnter={dragEnter}
                            dragEnd={dragEnd}
                        />
                    ))}
                    <AddBoardContainer>
                        <AddButton
                            placeholder="Enter Board Name"
                            text="Add board"
                            onSubmit={addboardHandler}
                        />
                    </AddBoardContainer>
                </Boards>
            </BoardsContainer>
        </KanbanWrapper>
    );
}

export default Kanban;
