import styled from 'styled-components/native'

import styleGlobal from './../../style'

export const BackgroundImage = styled.ImageBackground`
  flex: 3;
`

export const TitleBar = styled.View`
  flex: 1;
  justify-content: flex-end;
`

export const Title = styled.Text`
  align-self: center;
  font-size: 50px;
  font-weight: bold;
  color: ${styleGlobal.colors.mainText};
  margin-top: 60px;
`

export const Subtitle = styled.Text`
  align-self: center;
  font-size: 20px;
  color: ${styleGlobal.colors.mainText};
  margin-top: 5px;
  margin-bottom: 30px;
`

export const Menu = styled.TouchableOpacity`
  align-self: flex-end;
  margin-right: 20px;
  margin-top: 35px;
  padding: 10px;
`
export const Logout = styled.TouchableOpacity`
  align-self: flex-end;
  margin-right: 30px;
  padding: 5px 10px;
  background-color: #333;
  border-radius: 3px;
`
export const LogoutText = styled.Text`
  font-size: 16px;
  color: #FFF;
`


