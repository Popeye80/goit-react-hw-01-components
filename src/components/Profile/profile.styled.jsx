import styled from 'styled-components';

export const ProfileWrap = styled.div`
  padding-top: ${props => props.theme.spacing(8)};
  width: ${props => props.theme.spacing(63)};
  margin: 0 auto;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.colors.boxShadow};
  border-radius: ${props => props.theme.spacing(1)};
  overflow: hidden;
`;
export const Description = styled.div`
  text-align: center;
`;
export const UserAvatar = styled.img`
  display: block;
  width: ${props => props.theme.spacing(25)};
  height: ${props => props.theme.spacing(25)};
  margin: 0 auto;
  margin-bottom: ${props => props.theme.spacing(5)};
`;
export const UserName = styled.p`
  font-weight: 500;
  margin-bottom: ${props => props.theme.spacing(3)};
`;
export const UserTag = styled.p`
  color: ${props => props.theme.colors.grey};
  margin-bottom: ${props => props.theme.spacing(3)};
`;
export const UserLocation = styled.p`
  color: ${props => props.theme.colors.grey};
  margin-bottom: ${props => props.theme.spacing(6)};
`;
export const StatsList = styled.ul`
  background-color: ${props => props.theme.colors.lightGrey};
  display: flex;
`;
export const StatsItem = styled.li`
  font-style: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${props => props.theme.spacing(21)};
  height: ${props => props.theme.spacing(18)};
  border-top: 1px solid ${props => props.theme.colors.grey};
  border-right: 1px solid ${props => props.theme.colors.grey};

  :last-child {
    border-right: none;
  }
`;
export const Statslabel = styled.span`
  color: ${props => props.theme.colors.grey};
  margin-bottom: ${props => props.theme.spacing(1)};
`;
export const StatsQuantity = styled.span`
  font-weight: 600;
`;
