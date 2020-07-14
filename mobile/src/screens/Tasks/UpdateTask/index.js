import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import DatePicker from '@react-native-community/datetimepicker'
import Icon from 'react-native-vector-icons/FontAwesome'
import { format } from 'date-fns'
import pt from 'date-fns/locale/pt'

import { useTask } from './../../../contexts/task'

import styleGlobal from './../../../style'
import Background from './../../../components/Background'
import { Container, FormContainer, InputGroup, DateSelected, 
  FormInput, DateButton, ContainerButtons, CancelButton, CancelText, SaveButton, SaveText 
} from './style'

const UpdateTask = () => {

  const navigation = useNavigation()
  const { addTask } = useTask()

  const [ description, setDescription ] = useState( '' )
  const [ date, setDate ] = useState( new Date() )
  const [ opened, setOpened ] = useState( false )

  const dateSelected = format( date, "d, MMMM 'de' yyyy", { locale: pt } )

  const onChange = ( event, selectedDate ) => {
    const currentDate = selectedDate || date
    setDate( currentDate )
    setOpened( !opened )
  }

  const handleAddTask = () => {
    addTask( description, date )
    setDescription( '' )
    setDate( new Date() )
    navigation.navigate( 'Home' )
  }

  return (

    <Background>
      <Container>

        <FormContainer>
          
          <InputGroup>
            <FormInput
              autoCorrect={ true }
              placeholder="Descrição da tarefa" 
              value={ description }
              onChangeText={ setDescription }
            />
            <DateButton onPress={ () => setOpened( true ) }>
              <Icon name="calendar" size={20} color={styleGlobal.colors.secondary}/>
            </DateButton>
          </InputGroup>

          <DateSelected>{ dateSelected }</DateSelected>

          { opened && (
            <DatePicker 
              value={ date }
              onChange={ onChange }
              minimumDate={ new Date() }
              mode="date"
              display="spinner"
              locale="pt"
              onCancel={ () => setOpened( !opened ) }
            />
          ) }

          <ContainerButtons>
            <CancelButton onPress={ () => navigation.navigate( 'Home' ) }>
              <CancelText>Cancelar</CancelText>
            </CancelButton>
            
            <SaveButton onPress={ handleAddTask }>
              <SaveText>Salvar Tarefa</SaveText>
            </SaveButton>
          </ContainerButtons>

        </FormContainer>

        </Container>
    </Background>
  )
}

export default UpdateTask

