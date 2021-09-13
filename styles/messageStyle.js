import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: 'rgba(242,160,191,1)';
  width: 100%;
`;

export const Card = styled.TouchableOpacity`
  width: 100%;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const UserImgWrapper = styled.View`
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const UserImg = styled.Image`
  width: 75px;
  height: 75px;
  border-radius: 45px;
`;

export const TextSection = styled.View`
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  padding-left: 0;
  margin-left: 10px;
  width: 300px;
  border-bottom-width: 1px;
  border-bottom-color: #cccccc;
`;

export const UserInfoText = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
  font-family: 'BariolRegular'; 
`;

export const UserName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  font-family: 'BariolBold';
  color: #ffffff;
`;

export const PostTime = styled.Text`
  font-size: 14px;
  color: #ffffff;
  font-family: 'BariolRegular';
`;

export const MessageText = styled.Text`
  font-size: 18px;
  color: #ffffff;
  font-family: 'BariolRegular';
`;