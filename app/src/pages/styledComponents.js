import styled from 'styled-components';

export const PageContainer = styled.main`
	width: ${({ width }) => width ? width : null};
	height: ${({ height }) => height ? height : 'fit-content'};
	margin: ${({ margin }) => margin ? margin : `0 ${50}px`};
`;