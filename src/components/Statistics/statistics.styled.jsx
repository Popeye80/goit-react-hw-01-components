import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatisticsWrap = styled.section`
  width: ${props => props.theme.spacing(68)};
  margin: 0 auto;
  margin-bottom: ${props => props.theme.spacing(5)};
`;
export const StatisticTitle = styled.h2`
  text-align: center;
`;
export const StatisticList = styled.ul`
  display: flex;
`;
export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${getRandomHexColor};
  align-items: center;
  justify-content: center;
  width: ${props => props.theme.spacing(17)};
  height: ${props => props.theme.spacing(15)};
`;
export const StatisticLabel = styled.span`
  color: ${props => props.theme.colors.lightGrey};
`;
