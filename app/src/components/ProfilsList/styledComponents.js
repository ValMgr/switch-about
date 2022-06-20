import styled from 'styled-components';

import { colors, fonts } from '../../theme';

export const ContainerProfil = styled.div`
	width: 100%
	height: fit-content;
	padding: 2rem;
	margin: 2rem 0;
	border-radius: 1rem;
	background-color: ${colors.cardBackground};
	border: solid 2px ${colors.darkBlue};
	box-shadow: 0px 0px 8px rgba(64, 160, 244, 0.25);
`;

export const ContainerProfils = styled.div`
	height: fit-content;
	width: 100%;
`;

export const Item = styled.li`
	padding-left: 1rem; 
	font-family: ${fonts.bodyFont};
	color: ${colors.darkBlue};
	margin: 0.5rem 0;
`;