import styled from 'styled-components';

const BoardWrapper = styled.div`
	min-width: 290px;
	width: 290px;
	max-height: 100%;
	flex-basis: 290px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	background-color: #ebecf0;
	border-radius: 5px;
	height: fit-content;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
`;

const Title = styled.p`
	font-weight: bold;
	font-size: 1rem;
	display: flex;
	gap: 5px;
	align-items: center;
	line-height: 1.875rem;

	span {
		color: rgb(145, 145, 145);
	}
`;

const Menu = styled.div`
	cursor: pointer;
	position: relative;
`;

const BoardCards = styled.div`
	padding: 10px;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	overflow-y: auto;

	&:-webkit-scrollbar {
		width: 8px;
	}
	
	&:-webkit-scrollbar-thumb {
		border-radius: 50px;
		border: 1px solid #ccc;
		background-color: #fff;
	}
	
	&:-webkit-scrollbar-thumb:hover {
		border: 1px solid gray;
	}
`;

export {
	BoardWrapper,
	Header,
	Title,
	Menu,
	BoardCards,
};
