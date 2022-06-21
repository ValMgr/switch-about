import styled from 'styled-components';
import { colors, fonts } from '../../theme';

export const ContainerInformations = styled.div`
	padding: 1rem 2rem;
`;

export const ContainerImage = styled.img`
	width: 100%;
	height: 40%;
	object-fit: cover;
`;

export const Subtitle = styled.p`
	font-size: 1rem;
	margin: 0;
`;

export const ContainerFormation = styled.div`
	width: 100%;
	height: 100%;
	max-height: 446px;
	min-height: 446px;
	background-color: ${colors.fullWhite};
	margin: 2rem 0;
	border-radius: 1rem;
	overflow: hidden;
	margin: 0.5rem 0;
	position: relative;
	z-index: 1;
`;

export const Title = styled.p`
	font-size: 1.5rem;
	margin: 0.5rem 0;
	font-family: ${fonts.titleFont};
`;

export const Description = styled.p`
	height: 50px;
	white-space: nowrap;
  overflow: hidden;
	text-overflow: ellipsis;
`;

export const ContainerButton = styled.div`
	position: absolute;
	left: 2rem;
	top: 87%;
`;

export const BackgroundPopup = styled.div`
	width: 100%;
	height: 100%;
	z-index: 999;
	background-color: ${colors.black};
	opacity: 0.2;
	backdrop-filter: blur(10px);
`;

export const ContainerPopup = styled.div`
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;	
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: 999;
`;