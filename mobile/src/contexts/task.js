import React, { createContext, useContext, useState } from 'react'
import { Alert } from 'react-native'
import { formatRelative, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'

const TaskContext = createContext( {} )

import api from './../services/api'

export const TaskProvider = ( { children } ) => {

  const [ tasks, setTasks ] = useState( [] )
  const [ loading, setLoading ] = useState( true )

  const loadTasks = async () => {
    const response = await api.get( '/tasks' )
    const data = response.data.map( task => {
      return {
        ...task,
        dateFormatted: formatRelative( parseISO( task.estimated ), new Date(), {
          locale: pt,
          addSuffix: true
        } )
      }
    } )
    setTasks( data )
    setLoading( false )
  }

  const addTask = async ( description, date ) => {

    try {
      if( !description ) {
        Alert.alert( 'Dados inválidos', 'Informe uma descrição para a tarefa' )
        return
      }
  
      const task = await api.post( '/tasks', { description, date } )
  
      if( task ) {
        Alert.alert( 'Sucesso', 'Task adicionanda com sucesso' )
        loadTasks()
      }
    } catch (error) {
      Alert.alert( 'Erro no Servidor', 'Por favor contate o admin' )
      return
    }

  }

  const toggleTask = async ( id ) => {
    await api.post( `/tasks/${id}` )
    loadTasks()
  }

  const removeTask = async ( id ) => {
    await api.delete( `/tasks/${id}` )
    loadTasks()
  }

  return (
    <TaskContext.Provider value={ { tasks, loading, loadTasks, addTask, toggleTask, removeTask } } >
      { children }
    </TaskContext.Provider>
  )
}

export const useTask = () => {
  const task = useContext( TaskContext )
  return task
}