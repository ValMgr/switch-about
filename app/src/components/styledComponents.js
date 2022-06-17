import styled from 'styled-components';

import colors from '../utils/theme/colors';

export const DefaultIframe = styled.iframe`
	width: 100%;
	height: 100%;
	border: none;
`;

export const ContainerLoader = styled.div`
	width: fit-content;
	height: fit-content;
	margin: auto;
`;

export const ContainerError = styled.div`
	width: 100%;
	height: fit-content;
	padding: 1rem;
	text-align: left;
	margin: 1rem 0;
	background-color: ${colors.secondary};
`;

export const ContainerFormation = styled.div`
	width: 100%;
	height: fit-content;
	background-color: ${colors.secondary};
	padding: 1rem;
	margin: 1rem 0;
`;

export const ContainerFormations = styled.div`
	width: 100%;
	height: fit-content;
`;