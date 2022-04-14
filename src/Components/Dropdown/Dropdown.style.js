import styled from 'styled-components';

const DropDownWrapper = styled.div`
	position: absolute;
	right: 0;
	top: 100%;
	background-color: #fff;
	border-radius: 3px;
	height: fit-content;
	max-width: 250px;
	max-height: 390px;
	overflow-y: auto;
	z-index: 5;  
	box-shadow: 1px 0px 20px rgba(0, 0, 0, 0.12);
	padding: 5px 10px;
	width: max-content;
	cursor: default;

	p {
		border-bottom: 1px solid #f8f8f8;
		cursor: pointer;
	}
`;

export default DropDownWrapper;
