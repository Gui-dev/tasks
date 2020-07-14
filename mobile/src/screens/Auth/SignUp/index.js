import React, { useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'

import api from './../../../services/api'
import Background from './../../../components/Background'
import { Container, Form, FormInput, SubmitButton, SubmitText, LinkButton, LinkText } from './style'

const SignUp = () => {

  const navigation = useNavigation()
  const [ name, setName ] = useState( '' )
  const [ email, setEmail ] = useState( '' )
  const [ password, setPassword ] = useState( '' )

  const addSignUp = async () => {
    try {
      const user = await api.post( '/users', {
        name,
        email,
        password
      } )
      
      navigation.navigate( 'SignIn' )
      
    } catch (error) {
      Alert.alert( 'Erro!', 'Por favor verifique seus dados' )
    }
  }

  return (
    <Background>
      <Container>
        <Icon name="tasks" size={90} color="#7B84DB"/>

        <Form>
          <FormInput 
            autoCapitalize="words"
            autoCorrect={ false }
            placeholder="Seu Nome"
            value={ name }
            onChangeText={ setName }
          />
          <FormInput 
            autoCapitalize="none"
            autoCorrect={ false }
            keyboardType="email-address"
            placeholder="Seu E-mail"
            value={ email }
            onChangeText={ setEmail }
          />
          <FormInput
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={ false } 
            placeholder="Sua Senha"
            value={ password }
            onChangeText={ setPassword }
          />

          <SubmitButton onPress={ addSignUp }>
            <SubmitText>Fazer Cadastro</SubmitText>
          </SubmitButton>
        </Form>

        <LinkButton onPress={ () => navigation.navigate( 'SignIn' ) }>
          <LinkText>Já tenho cadastro</LinkText>
        </LinkButton>
      </Container>
    </Background>
  )
}

export default SignUp