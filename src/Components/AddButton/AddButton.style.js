import styled from 'styled-components';

const AddButtonWrapper = styled.div`
 	width: 100%;
`;

const Button = styled.p`
	padding: 6px 12px;
	cursor: pointer;
	transition: 200ms;  
	background-color: #fff;
	color: #000;
	border-radius: 10px;
	box-shadow: 1px 1px 0 1px rgba(0, 0, 0, 0.12);
	width: 100%;
	text-align: center;
	font-size: 1rem;
	line-height: 1.875rem;

	&:hover {
		background-color: #ddd;
	}
`;

const CloseButton = styled.button`
	cursor: pointer;
	height: 24px;
	width: 24px;
	background-color: transparent;
	color: #000;
	border: none;
`;

const SubmitButton = styled.button`
	cursor: pointer;
	border-radius: 5px;
	outline: none;
	background-color: #0079bf;
	color: #fff;
	border: none;
	transition: 100ms ease;
	padding: 10px;

	&:hover {
		background-color: #046daa;
	}

	&:active {
		transform: translateY(2px);
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
	background-color: #fff;
	border-radius: 10px;
	padding: 10px;

	input {
		border: 2px solid #0079bf;
		border-radius: 5px;
		outline: none;
		font-size: 1rem;
		padding: 10px;
	}
`;

const FormButtons = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;
`;

export {
	AddButtonWrapper,
	Button,
	Form,
	FormButtons,
	CloseButton,
	SubmitButton,
};
