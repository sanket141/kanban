import styled from 'styled-components';

const KanbanWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
`;

const Header = styled.div`
    padding: 30px;
    box-shadow: 0 1px 20px rgba(56, 40, 40, 0.05);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    background-color: #fff;
`;
  
const BoardsContainer = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    overflow-x: auto;
    padding-top: 20px;
`;
  
const Boards = styled.div`
    height: 100%;
    width: fit-content;
    padding: 10px 30px;
    display: flex;
    gap: 30px;
`;
  
const AddBoardContainer = styled.div`
    flex-basis: 290px;
    min-width: 290px;
`;
  
export {
    KanbanWrapper,
    Header,
    BoardsContainer,
    Boards,
    AddBoardContainer,
};
