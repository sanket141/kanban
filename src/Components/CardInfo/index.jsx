import React from "react";
import {
	CardInfoWrapepr,
	InfoBox,
	Title,
	CloseButton,
} from "./CardInfo.style";
import PropTypes from 'prop-types';
import { CloseIcon } from "../../svgs";

function CardInfo(props) {

    const { title, onClose } = props;

    return (
		<CardInfoWrapepr>
			<InfoBox className="cardinfo_box">
				<Title>{title}</Title>
				<CloseButton onClick={onClose}>				
					<CloseIcon />
				</CloseButton>
			</InfoBox>
		</CardInfoWrapepr>
    );
}

CardInfo.propTypes = {
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default CardInfo;
