import styled from 'styled-components';

const Menu = styled.div`
	width: 30px;
	height: 20px;
	transform: translateX(15px);
	flex: 1;
	cursor: pointer;
	opacity: 0;
	transition: 200ms;
	text-align: center;
`;

const CardWrapper = styled.div`
	padding: 10px;
	display: flex; 
	flex-direction: row;
	gap: 10px;
	background-color: #fff;
	border-radius: 10px;

	&:hover ${Menu} {
		opacity: 1;
	}
`;

const Title = styled.div`
	flex: 3;
	display: flex;
	flex-wrap: wrap;
	font-weight: bold;
	font-size: 1rem;
	line-height: 1.875rem;
`;

export {
	CardWrapper,
	Menu,
	Title,
};
