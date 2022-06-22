import styled, { css } from 'styled-components';

import { colors } from '../../theme';

export const ContainerToaster = styled.div`
	width: 100%;
	height: fit-content;
	padding: 0.3rem 1rem;
	text-align: left;
	margin: 1rem 0;
	border-radius: 0.6rem;
	display: flex;
	align-items: center;

	${({ type }) => {
    if(type === 'error') {
      return css`
				border: 2px solid ${colors.orange};
				background-color: ${colors.backgroundToasterError};

				p {
					color: ${colors.orange}!important;
				}
			`;
    } else if(type === 'warning') {
      return css`
				border: 2px solid ${colors.yellow};
				background-color: ${colors.backgroundToasterWarning};

				p {
					color: ${colors.yellow}!important;
				}
				`;
    } else if(type === 'success') {
      return css`
				border: 2px solid ${colors.green};
				
				p {
					color: ${colors.green}!important;
				}
			`;
    } else if(type === 'information') {
      return css`
				border: 2px solid ${colors.darkBlue};
				background-color: ${colors.backgroundToasterInformation};
				
				p {
					color: ${colors.darkBlue}!important;
				}
			`;
    }
  }}
`;

export const ContainerSvg = styled.div`
	width: fit-content;
	height: fit-content;
	margin-right: 1rem;

	svg {
		path {
		${({ type }) => {
    if(type === 'error') {
      return css`
				fill: ${colors.orange}!important;
				`;
    } else if(type === 'warning') {
      return css`
				fill: ${colors.yellow};
					`;
    } else if(type === 'success') {
      return css`
					fill: ${colors.green};
				`;
    } else if(type === 'information') {
      return css`
				fill: ${colors.darkBlue};
			`;
    }
  }}
	}
}
`;