import React from 'react';
import { View, Text, StyleSheet, FlatList, Alert, } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import users from '../data/users';
import { ListItem, Avatar, Button, ButtonGroup, Icon } from 'react-native-elements';

const UserList = (props) => {

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
        <ListItem.Content right={true}>
          <>
          <Button
            onPress={() => props.navigation.navigate('UserForm', item)}
            type='clear'
            icon={<Icon name='edit' size={20} color='#333' />}
            />
          <Button
            onPress={() => {
              Alert.alert('Excluir usuário', `Você deseja excluir o usuário: ${item.name} ?`, [
                {
                  text: 'Não',
                }, {
                  text: 'Sim',
                  onPress(){console.warn(`Usuário ${item.name} Deletado`)}
                }
              ])
            }}
            type='clear'
            icon={<Icon name='delete' size={20} color='#333' />}
            />
          </>
        </ListItem.Content>
      </ListItem>
      )
    }

  return (
    <View>
      <FlatList 
        keyExtractor={user => user.id.toString()}
        data={users}
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
