import styled from 'styled-components';

import { colors, fonts } from '../../theme';

export const DefaultInput = styled.input`
	background-color: ${colors.inputWhite};
	border: 2px solid ${colors.borderInput};
	color: ${colors.textInput};
	font-family: ${fonts.bodyFont};
	padding: 0.5rem;
	border-radius: 0.6rem;
	margin: 0.3rem 0;
	width: 100%;
`;

export const DefaultSelectInput = styled.select`
	background-color: ${colors.inputWhite};
	border: 2px solid ${colors.borderInput};
	color: ${colors.textInput};
	font-family: ${fonts.bodyFont};
	padding: 0.5rem;
	border-radius: 0.6rem;
	margin: 1rem 0.5rem 1rem 0;
`;

export const InputLabel = styled.label`
	color: ${colors.darkBlue};
	font-family: ${fonts.title};
	font-size: 16px;
`;

export const ContainerInput = styled.div`
	height: fit-content;
	width: fit-content;
	display: flex;
	flex-direction column;
	margin: 1rem 0.5rem 1rem 0;
	width: 100%;
`;