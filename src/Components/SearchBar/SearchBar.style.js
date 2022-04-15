import styled from 'styled-components';

const Input = styled.input`
    right: 25px;
    position: absolute;
    height: 25px;
    padding: 5px;
`;

const List = styled.div`
    width: max-content;
    position: absolute;
    right: 25px;
    top: 60px;
    background-color: #ebecf0;
    border-radius: 5px;
`;

const ListItem = styled.div`
    padding: 5px 10px;
    cursor: pointer;
`;
  
export {
    Input,
    List,
    ListItem
};
