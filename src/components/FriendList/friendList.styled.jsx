import styled from 'styled-components';

export const FriendsList = styled.ul`
  width: ${props => props.theme.spacing(90)};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FriendItem = styled.li`
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(3)};
  width: ${props => props.theme.spacing(75)};
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing(3)};
  box-shadow: ${props => props.theme.colors.boxShadow};
  :last-child {
    margin-bottom: ${props => props.theme.spacing(0)};
  }
`;

export const FriendOnline = styled.span`
  display: block;
  width: ${props => props.theme.spacing(3)};
  height: ${props => props.theme.spacing(3)};
  background-color: ${props => props.theme.colors.green};
  border-radius: 50%;
`;
export const FriendOffline = styled.span`
  display: block;
  width: ${props => props.theme.spacing(3)};
  height: ${props => props.theme.spacing(3)};
  background-color: ${props => props.theme.colors.red};
  border-radius: 50%;
`;
export const FriendAvatar = styled.img`
  width: ${props => props.theme.spacing(18)};
  height: ${props => props.theme.spacing(18)};
  margin-left: ${props => props.theme.spacing(3)};
`;
export const FriendName = styled.p`
  margin-left: ${props => props.theme.spacing(3)};
  font-weight: bold;
`;
