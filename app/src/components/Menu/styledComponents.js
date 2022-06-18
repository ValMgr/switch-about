import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../../theme';

export const ContainerMenu = styled.header`
	width: 100%;
	height: fit-content;
	padding: 10px 50px;
	background-color: ${colors.white};
	display: flex;
	justify-content: space-between;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	align-items: center;
`;

export const ItemsMenu = styled.ul`
	display: flex;
	align-items: center;
	margin: 0;
	padding: 0;
`;

export const ItemMenu = styled.li`
	margin-right: 1.5rem;
`;

export const DefaultLink = styled(Link)`
	text-decoration: none;
	width: 100%;
	height: 100%;
	font-family: "Poppins";
`;

export const LogoLink = styled(Link)`
	opacity: 1!important;
`;
