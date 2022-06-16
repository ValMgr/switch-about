import styled from 'styled-components';

export const PageContainer = styled.main`
	height: fit-content;
	margin: ${({ margin }) => margin ? margin : `0 ${50}px`};
`;