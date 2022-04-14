import React, { useState } from "react";
import PropTypes from 'prop-types';
import {CloseIcon} from "../../svgs";
import {
  AddButtonWrapper,
  Button,
  Form,
  FormButtons,
  CloseButton,
  SubmitButton,
} from './AddButton.style';

function AddButton(props) {

	const { onSubmit, placeholder, text } = props;

	const [isEditMode, setIsEditMode] = useState(false);
	const [inputText, setInputText] = useState("");

	function onSubmitClicked(e) {

		e.preventDefault();

		if (inputText && onSubmit) {
			setInputText("");
			onSubmit(inputText);
		}

		setIsEditMode(false);
	};

	return (
		<AddButtonWrapper>
			{isEditMode ? (
				<Form onSubmit={onSubmitClicked}>
					<input
						type="text"
						value={inputText}
						placeholder={placeholder || text}
						onChange={(event) => setInputText(event.target.value)}
						autoFocus
					/>
					<FormButtons>
						<SubmitButton type="submit">{text}</SubmitButton>            
						<CloseButton onClick={() => setIsEditMode(false)}>
							<CloseIcon />
						</CloseButton>
					</FormButtons>
				</Form>
			) : (
				<Button onClick={() => setIsEditMode(true)}>
					{text}
				</Button>
			)}
		</AddButtonWrapper>
	);
}

AddButton.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default AddButton;
