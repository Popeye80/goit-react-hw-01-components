import styled from 'styled-components';

export const Table = styled.table`
  width: ${props => props.theme.spacing(218)};
  margin: 0 auto;
  border-collapse: collapse;
  margin-top: ${props => props.theme.spacing(8)};
  box-shadow: ${props => props.theme.colors.boxShadow};
`;

export const Thead = styled.thead`
  height: ${props => props.theme.spacing(13)};
  background-color: ${props => props.theme.colors.lightBlue};
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
`;

export const TheadTh = styled.th`
  border: 1px solid ${props => props.theme.colors.lightGrey};
`;

export const TbodyTr = styled.tr`
  text-align: center;
  :nth-child(even) {
    background-color: ${props => props.theme.colors.ultraBlue};
  }
`;

export const TbodyTd = styled.td`
  border: 1px solid ${props => props.theme.colors.lightGrey};
  color: ${props => props.theme.colors.darkGrey};
  height: ${props => props.theme.spacing(13)};
  text-transform: capitalize;
`;
