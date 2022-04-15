import styled from 'styled-components';

const CardInfoWrapepr = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
    background-color: #00000031;
`;

const InfoBox = styled.div`
	position: absolute;
	transform: translate(-50%, -50%);
	top: 50%;
	left: 50%;
	background-color: #fff;
    padding: 30px 35px;
    border-radius: 5px;
`;

const Title = styled.div`

`;

const CloseButton = styled.button`
	cursor: pointer;
	height: 24px;
	width: 24px;
	background-color: transparent;
	color: #000;
	border: none;
	position: absolute;
    top: 5px;
    right: 5px;
`;

export {
	CardInfoWrapepr,
	InfoBox,
	CloseButton,
	Title,
};
