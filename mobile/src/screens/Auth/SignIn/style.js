import { Platform } from 'react-native'
import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.KeyboardAvoidingView.attrs({
  enable: Platform.OS === 'ios',
  behavior: 'padding'
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`

export const Loading = styled.View`
  
`

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`

export const FormInput = styled.TextInput`
  font-size: 18px;
  color: #FFF;
  margin-top: 10px;
  padding: 10px;
  border-bottom-width: 1px;
  border-color: #FFF;
`

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  height: 45px;
  margin-top: 30px;
  background-color: #7B84DB;
  border-radius: 4px;
`

export const SubmitText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #FFF;
`

export const LinkButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`

export const LinkText = styled.Text`
  font-size: 18px;
  font-weight: 300;
  color: #FFF;
`
