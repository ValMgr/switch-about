import styled from 'styled-components';

import { colors, fonts } from '../../theme';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: fit-content;
`;

export const ContainerFormations = styled.div`
	height: fit-content;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(298px, 1fr));
	grid-gap: 2rem;
`;

export const ListResult = styled.p`
	font-size: 0.8rem;
	width: 100%;
	height: fit-content;
	text-align: left;
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

export const ContainerContentMore = styled.div`
	width: 80%;
	height: 60%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: ${colors.fullWhite};
	padding: 2rem;
	border-radius: 16px;
	z-index: 999;
	overflow: scroll;
`;