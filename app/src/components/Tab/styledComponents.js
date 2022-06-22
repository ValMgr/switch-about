import styled from 'styled-components';

import { colors, fonts } from '../../theme';

export const ContainerProfil = styled.div`
	width: 100%
	height: fit-content;
	padding: 1rem 1.5rem;
	margin: 2rem 0;
	border-radius: 1rem;
	background-color: ${colors.lightBlue2};

	&:hover {
		cursor: pointer;
	}
`;

export const ContainerTabFirstPart = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ContainerName = styled.div`
	display: flex;
	width: fit-content;
`;

export const ProfilName = styled.p`
	font-size: 1rem;
	margin: 0 0.5rem 0 0;
	text-transform: capitalize;
`;

export const ContainerMore = styled.div`
	width: 100%;
	height: fit-content;
	padding: 0 1rem;
	margin-top: 2rem;
`;

export const ProfilActivity = styled.p`
	font-size: 1rem;
	margin: 0;
	text-transform: capitalize;
`;

export const Item = styled.li`
	padding-left: 1rem; 
	font-family: ${fonts.bodyFont};
	color: ${colors.darkBlue};
	margin: 0.5rem 0;
`;