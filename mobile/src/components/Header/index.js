import React, { useMemo, useState } from 'react'
import { format } from 'date-fns'
import pt from 'date-fns/locale/pt'
import Icon from 'react-native-vector-icons/FontAwesome'

import { useAuth } from './../../contexts/auth'

import { BackgroundImage, TitleBar, Title, Subtitle, Menu, Logout, LogoutText } from './style'

const Header = ( { image } ) => {
  
  const { signOut } = useAuth()
  const [ showMenu, setShowMenu ] = useState( false )
  const today = useMemo( 
    () => format( new Date(), "d, MMMM 'de' yyyy", { locale: pt } ),
    [ new Date() ]
  )

  const handleLogout = () => {
    signOut()
  }

  return (
    <BackgroundImage source={ image }>
      <Menu onPress={ () => setShowMenu( !showMenu ) }>
        <Icon name="ellipsis-v" size={20} color="#FFF"/>
      </Menu>
      { showMenu && (
        <Logout onPress={ handleLogout }>
          <LogoutText>Sair</LogoutText>
        </Logout>
      ) }
      <TitleBar>
        <Title>Hoje</Title>
        <Subtitle>{ today }</Subtitle>
      </TitleBar>
    </BackgroundImage>
  )
}

export default Header