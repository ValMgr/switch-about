import styled from 'styled-components';

import { colors, fonts } from '../../theme';

export const ContainerButton = styled.div`
	width: ${({ width }) => width ? width : 'fit-content'};
	height: fit-content;
	padding: 0.5rem 1rem;
	background-color: ${colors.green};
	color: ${colors.white};
	border-radius: 0.6rem;
	font-family: ${fonts.bodyFont};
	margin: ${({ margin }) => margin ? `${1}rem ${0}` : 0};
	text-align: center;

	a {
		color: ${colors.white}!important;
		opacity: 1!important;
	}

	&:hover {
		transition: 300ms linear;
		opacity: 0.9;
		cursor: pointer;
	}
`;