import styled from 'styled-components';

import { colors, fonts } from '../../theme';

export const ContainerFormation = styled.div`
	width: 100%;
	height: fit-content;
	background-color: ${colors.cardBackground};
	padding: 2rem;
	margin: 2rem 0;
	border-radius: 1rem;
	border: solid 2px ${colors.darkBlue};
	box-shadow: 0px 0px 8px rgba(64, 160, 244, 0.25);
`;

export const ContainerFormations = styled.div`
	width: 100%;
	height: fit-content;
`;

export const ListResult = styled.p`
	font-size: 0.8rem;
	width: 100%;
	height: fit-content;
	text-align: right;
`;

export const CategoryTitle = styled.p`
	font-family: ${fonts.bodyFont};
	font-size: 1rem;
	font-weight: 500;
	width: fit-content;

	&::after {
		content: "";
		display: block;
		width: 100%;
		height: 1.5px;
		background-color: ${colors.darkBlue};
	}
`;