import React, { useEffect, useState } from 'react'

import { useTask } from './../../../contexts/task'
import today from './../../../assets/imgs/today.jpg'
import Header from './../../../components/Header'
import Background from './../../../components/Background'
import TaskList from './../../../components/Tasks'

import { Container } from './style'

const CheckTasks = () => {

  const [ checkTasks, setCheckTasks ] = useState( [] )
  const { tasks, toggleTask, removeTask } = useTask()

  useEffect( () => {
    const response = tasks.filter( task => task.doned === false )
    setCheckTasks( response )    
  }, [ tasks ] )

  return (
    <Background>
      <Container>
        <Header image={ today }/>

        <TaskList 
          tasks={ checkTasks }
          toggleTask={ toggleTask }
          onCancel={ removeTask }
        />
      </Container>
    </Background>
  )
}

export default CheckTasks