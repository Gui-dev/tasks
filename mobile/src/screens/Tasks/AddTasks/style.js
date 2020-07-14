import styled from 'styled-components/native'

import styleGlobal from './../../../style'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.View`
  
  /* margin-top: 40px; */
`

export const InputGroup = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
` 

export const DateSelected = styled.Text`
  font-size: 20px;
  color: #999;
  margin-bottom: 30px;
`

export const FormInput = styled.TextInput`
  color: #FFF;
  width: 75%;
  height: 40px;
  margin: 10px 10px 10px 0;
  padding: 10px;
  border-width: 1px;
  border-color: #E3E3E3;
  border-radius: 6px;
`

export const DateButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 0 5px;
  background: rgba(255, 255, 255, .1);
  border-radius: 20px;
`

export const ContainerButtons = styled.View`
  flex-direction: row;
`

export const CancelButton = styled.TouchableOpacity`
  margin-right: 20px;
  padding: 20px;
`

export const CancelText = styled.Text`
  font-size: 20px;
  color: ${styleGlobal.colors.quaternary};
`

export const SaveButton = styled.TouchableOpacity`
  padding: 20px;
`

export const SaveText = styled.Text`
  font-size: 20px;
  color: ${styleGlobal.colors.secondary};
`
