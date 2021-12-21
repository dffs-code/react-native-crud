import React from 'react';
import { View, Text, StyleSheet, FlatList, } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import users from '../data/users';
import { ListItem, Avatar } from 'react-native-elements';

const UserList = (props) => {


  function getUserItem( { item }) {
    {/* <Text style={{color: '#000'}}>{item.name} - {item.email}</Text> */}
    return (
      <ListItem bottomDivider onPress={() => {props.navigation.navigate('UserForm')}}>

        <Avatar title={item.name} source={item.avatarUrl && {uri: item.avatarUrl}}/>
        <ListItem.Content>
          <ListItem.Title>
            {item.name}
          </ListItem.Title>
          <ListItem.Subtitle>  
            {item.email}
          </ListItem.Subtitle>
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
