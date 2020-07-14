import React, { useEffect,  } from 'react'
import { AppLoading } from 'expo'

import { useTask } from './../../../contexts/task'

import month from './../../../assets/imgs/month.jpg'
import Background from './../../../components/Background'
import Header from './../../../components/Header'
import TaskList from './../../../components/Tasks'

import { Container } from './style'

const Home = () => {

  const { tasks, loading, loadTasks, toggleTask, removeTask } = useTask()

  useEffect( () => {
    loadTasks()
  }, [] )
   
  return (
    <Background>
      <Container>
        
        <Header image={ month }/>
        
        { loading
            ? <AppLoading />
            : <TaskList 
                tasks={ tasks } 
                toggleTask={ toggleTask }
                onCancel={ removeTask }
              />
        }        

      </Container>
    </Background>
  )
}

export default Home