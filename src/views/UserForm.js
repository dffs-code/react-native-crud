import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import UsersContext from '../contexts/UsersContext';


const UserForm = ({route, navigation}) => {

  const { dispatch } = useContext(UsersContext);

  const [user, setUser] = useState(route.params ? route.params : {})
  return (
    <View style={style.form}>
      <Text style={{color: '#333', fontWeight: 'bold'}}>Nome</Text>
      <TextInput 
        style={style.input}
        onChangeText={name => setUser({...user, name})}
        placeholder='Informe o nome do usuário'
        value={user.name}
        placeholderTextColor="#666" 
        />
      <Text style={{color: '#333', fontWeight: 'bold'}}>Email</Text>
      <TextInput 
        style={style.input}
        onChangeText={email => setUser({...user, email})}
        placeholder='Informe o email do usuário'
        value={user.email}
        placeholderTextColor="#666" 
        />
       <Text style={{color: '#333', fontWeight: 'bold'}}>Avatar</Text>
      <TextInput 
        style={style.input}
        onChangeText={avatarUrl => setUser({...user, avatarUrl})}
        placeholder='Informe a avatarUrl do usuário'
        value={user.avatarUrl}
        placeholderTextColor="#666" 
        />

        <Button 
          title='Salvar'
          color='#a9cf48'
          onPress={() => {
            dispatch({
              type: user.id ? 'updateUser' : 'createUser',
              payload: user,
            })

            navigation.goBack()
          }}
        />
    </View>
  )
}

const style = StyleSheet.create({
  form: {
    padding: '5%',
  },
  input: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    color: '#111',
    borderRadius: 5,
  }
})

export default UserForm;