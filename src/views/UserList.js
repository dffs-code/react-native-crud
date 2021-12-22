import React, { useContext } from 'react';
import { View, StyleSheet, FlatList, Alert, } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ListItem, Avatar, Button, Icon } from 'react-native-elements';
import UsersContext from '../contexts/UsersContext';

const UserList = (props) => {

  const { state, dispatch } = useContext(UsersContext);

  function showDeleteAlert(item){
    return (
      Alert.alert('Excluir usuário', `Você deseja excluir o usuário: ${item.name} ?`, [
        {
          text: 'Sim',
          onPress(){
            dispatch({
              type: 'deleteUser',
              payload: item,
            })
          }
        },{
          text: 'Não',
        }
      ])
    )
  }

  function getUserItem( { item }) {
    return (
      <ListItem bottomDivider onPress={() => {props.navigation.navigate('UserForm', item)}}>

        <Avatar title={item.name} source={item.avatarUrl && {uri: item.avatarUrl}}/>
        <ListItem.Content>
          <ListItem.Title>
            {item.name}
          </ListItem.Title>
          <ListItem.Subtitle>  
            {item.email}
          </ListItem.Subtitle>
        </ListItem.Content>
          <Button
            onPress={() => props.navigation.navigate('UserForm', item)}
            type='clear'
            icon={<Icon name='edit' size={20} color='#85ab23' />}
            />
          
          <Button
            onPress={()=>showDeleteAlert(item)}
            type='clear'
            icon={<Icon name='delete' size={20} color='#F35353' />}
            />
      </ListItem>
      )
    }

  return (
    <View>
      <FlatList 
        keyExtractor={user => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  principal: {
    backgroundColor: '#333',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boldText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    padding: 10
  },
  postContainer: {
    width: '80%',
    backgroundColor: Colors.white,
    padding: 8,
    alignItems: 'center',
    margin: 10
  }
});

export default UserList;
