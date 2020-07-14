import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Icon from 'react-native-vector-icons/FontAwesome'

import styleGlobal from './../../style'
import { TaskList, TaskItem, TaskCheck, Pending, Done, TaskContent, TaskDecription, TaskDate,  
  TrashView, TrashText, ActionButtons, TrashButton, EditButton
} from './style'

const Tasks = ( { tasks, toggleTask, onCancel } ) => {

  const navigation = useNavigation()

  const renderLeftActions = (progress, dragX) => {
    
    return (
      <TrashView>
        <Icon name="trash" size={20} color={styleGlobal.colors.mainText}/>
        <TrashText>Excluir</TrashText>
      </TrashView>
    )
  }

  const renderRightActions = ( task ) => {
    
    return (
      <ActionButtons>

        <TrashButton onPress={ () => onCancel( task.id ) }>
          <Icon name="trash" size={30} color={styleGlobal.colors.mainText}/>
        </TrashButton>

        {/* <EditButton onPress={ () => navigation.navigate( 'UpdateTask', { task } ) }>
          <Icon name="edit" size={30} color={styleGlobal.colors.mainText}/>
        </EditButton> */}

      </ActionButtons>
    )
  }

  return (
    <TaskList 
      data={ tasks }
      keyExtractor={ item => String( item.id ) }
      renderItem={ ( { item: task } ) => (
        <Swipeable 
          renderLeftActions={ renderLeftActions }
          renderRightActions={ () => renderRightActions( task ) }
          onSwipeableLeftWillOpen={ () => onCancel( task.id ) }
          leftThreshold={100}
          rightThreshold={100}
          friction={ 2 }
        >
          <TaskItem>
            <TaskCheck onPress={ () => toggleTask( task.id ) }>
              { task.doned
                ? <Done>
                    <Icon name="check" size={20} color={styleGlobal.colors.mainText}/>
                  </Done> 
                : <Pending /> 
              }
            </TaskCheck>
            <TaskContent>
              <TaskDecription done={ task.doned }>{task.description}</TaskDecription>
              <TaskDate>{ task.dateFormatted ? task.dateFormatted : '' }</TaskDate>
            </TaskContent>
          </TaskItem>
        </Swipeable>
      ) }
    />
  )
}

export default Tasks