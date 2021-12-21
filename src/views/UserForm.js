import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const UserForm = (props) => {
  return (
    <View>
      <Text style={styles.boldText}>UserForm</Text>
    </View>
  )
}

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

export default UserForm;