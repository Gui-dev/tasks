import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

import styleGlobal from './../../style'

export const TaskList = styled.FlatList`
  flex: 7;
  padding: 10px;
`

export const TaskItem = styled.View`
  flex-direction: row;
  padding: 10px;
  border-bottom-width: 1px;
  border-color: #AAA;
`

export const TaskCheck = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  width: 20%;
`

export const Done = styled.View`
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  background-color: #4D7031;
  border: 1px solid #555;
  border-radius: 15px;
`

export const Pending = styled.View`
  width: 25px;
  height: 25px;
  border: 1px solid #555;
  border-radius: 15px;
`

export const TaskContent = styled.View`
  flex-direction: column;
`

export const TaskDecription = styled.Text`
  font-size: 15px;
  color: ${styleGlobal.colors.mainText};
  text-decoration-line: ${ props => props.done ? 'line-through' : 'none' };
`

export const TaskDate = styled.Text`
  font-size: 15px;
  color: ${styleGlobal.colors.mainText};
`

export const TrashView = styled.View`
  /* flex: 1; */
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  background-color: ${styleGlobal.colors.quaternary};
`

export const TrashText = styled.Text`
  align-self: center;
  font-size: 16px;
  color: ${styleGlobal.colors.mainText};
  margin-left: 5px;
`

export const ActionButtons = styled.View`
  flex-direction: row;
`

export const TrashButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-right: 5px;
  background-color: ${styleGlobal.colors.quaternary};
`

export const EditButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${styleGlobal.colors.secondary};
`