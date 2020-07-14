import React, { useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { useAuth } from './../../../contexts/auth'
import Background from './../../../components/Background'
import { Container, Loading, Form, FormInput, SubmitButton, 
  SubmitText, LinkButton, LinkText 
} from './style'

const SignIn = () => {

  const { signIn, loading } = useAuth()
  const navigation = useNavigation()
  const [ email, setEmail ] = useState( '' )
  const [ password, setPassword ] = useState( '' )

  const auth = () => {
    signIn( email, password )
  }

  return (
    <Background>
      <Container>

        {
          loading 
           ?
            <Loading>
              <ActivityIndicator size="large" color="#7B84DB"/>
            </Loading>   
           :
            <>
              <Icon name="tasks" size={90} color="#7B84DB"/>

              <Form>
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
                  placeholder="Sua Senha"
                  value={ password }
                  onChangeText={ setPassword }
                />

                <SubmitButton onPress={ auth }>
                  <SubmitText>Loggar</SubmitText>
                </SubmitButton>
              </Form>

              <LinkButton onPress={ () => navigation.navigate( 'SignUp' ) }>
                <LinkText>Não tem cadastro? Cadastre-se</LinkText>
              </LinkButton>
            </>
        }
 
      </Container>
    </Background>
  )
}

export default SignIn