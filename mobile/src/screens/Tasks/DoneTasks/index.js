import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'

import { useTask } from './../../../contexts/task'
import week from './../../../assets/imgs/week.jpg'
import Background from './../../../components/Background'
import Header from './../../../components/Header'
import TaskList from './../../../components/Tasks'

import { Container } from './style'

const DoneTasks = () => {

  const { tasks, toggleTask, removeTask } = useTask()
  const [ doneTasks, setDoneTasks ] = useState( [] )

  useEffect( () => {
    function loadTasks() {
      const response = tasks.filter( task => task.doned === true )
      setDoneTasks( response )
    } 
    loadTasks()
  }, [ tasks ] )

  return (
    <Background>
      <Container>
        <Header image={ week }/>  

        <TaskList 
          tasks={ doneTasks } 
          toggleTask={ toggleTask }
          onCancel={ removeTask }
        />
      </Container> 
    </Background>
  )
}

export default DoneTasks