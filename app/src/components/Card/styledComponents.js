import styled from 'styled-components';

import { colors, fonts } from '../../theme';

export const ContainerInformations = styled.div`
	padding: 1rem 2rem;
`;

export const ContainerIcon = styled.div`
	width: fit-content;
	height: fit-content;
	position: absolute;
	top: 1.5rem;
	right: 1.5rem;
`;

export const Subtitle = styled.p`
	font-size: 1.3rem;
	margin: 0;
	font-family: ${fonts.titleFont};
	width: 80%;
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
	padding: 1.5rem;
`;

export const Title = styled.p`
	font-size: 1.2rem;
	margin-top: 2rem;
	font-family: ${fonts.bodyFont};
`;

export const Description = styled.p`
  overflow: hidden;
	height: 50px;
`;

export const ContainerButton = styled.div`
	position: absolute;
	left: 1.5rem;
	top: 87%;
`;

export const BackgroundPopup = styled.div`
	width: 100%;
	height: 100%;
	z-index: 999;
	background-color: ${colors.black};
	opacity: 0.5;
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

export const ContainerDetails = styled.div`
	border-radius: 1rem;
	background-color: ${colors.lightGray};
	height: 100px;
	padding: 0.6rem 0.8rem;
	position: absolute;
	bottom: 5rem;
	left: 1.5rem;
	right: 1.5rem;
`;

export const ContainerClockPin = styled.div`
	display: flex;
	width: 100%;
	height: fit-content;
`;

export const ContainerItem = styled.div`
	display: flex;
	width: ${({ width }) => width};
	height: fit-content;
	align-items: center;
`;

export const TextItem = styled.p`
	margin: 0.5rem 0 0.5rem 0.5rem;
`;