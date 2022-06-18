import styled, { css } from 'styled-components';

import { colors } from '../../theme';

export const ContainerToaster = styled.div`
	width: 100%;
	height: fit-content;
	padding: 0.3rem 1rem;
	text-align: left;
	margin: 1rem 0;
	border-radius: 0.6rem;
	background-color: ${colors.inputWhite};

	${({ type }) => {
    if(type === 'error') {
      return css`
				border: 2px solid ${colors.red};
				box-shadow: 0px 0px 8px rgba(192, 0, 0, 0.25);

				p {
					color: ${colors.red}!important;
				}
			`;
    } else if(type === 'warning') {
      return css`
				border: 2px solid ${colors.orange};
				box-shadow: 0px 0px 8px rgba(192, 0, 0, 0.25);

				p {
					color: ${colors.orange}!important;
				}
				`;
    } else if(type === 'success') {
      return css`
				border: 2px solid ${colors.green};
				box-shadow: 0px 0px 8px rgba(0, 192, 133, 0.25);
				
				p {
					color: ${colors.green}!important;
				}
			`;
    } else if(type === 'information') {
      return css`
				border: 2px solid ${colors.lightBlue};
				box-shadow: 0px 0px 8px rgba(64, 160, 244, 0.25);
				
				p {
					color: ${colors.lightBlue}!important;
				}
			`;
    }
  }}
`;