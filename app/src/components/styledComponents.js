import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const ContainerMenu = styled.header`
	width: 100%;
	height: fit-content;
	padding: 1rem 50px;
	background-color: ${colors.secondary};
	display: flex;
	justify-content: space-between;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
`;

export const DefaultLink = styled(Link)`
	text-decoration: none;
	width: 100%;
	height: 100%;
	
	 &:hover {
		opacity: 0.5;
	 }
`;

export const ContainerButton = styled.div`
	width: fit-content;
	height: fit-content;
	padding: 1rem;
	background-color: ${colors.main};

	&:hover {
		opacity: 0.5;
	}
`;