/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   Button,
   Alert,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   ScrollView
 } from 'react-native';
 
 import {
   Colors,
 } from 'react-native/Libraries/NewAppScreen';
 
 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
     <View style={styles.principal}>
       <Text style={styles.boldText}>Welcome to React Native</Text>
 
       <View style={styles.postContainer}>
         <Text style={{fontWeight: 'bold', color: Colors.black,}}>React Native: Uma inovação incrível</Text>
         <Text style={{color: Colors.black,}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus modi, ut possimus distinctio esse ab ipsum doloribus delectus sit voluptatum quisquam. Fugit officiis sunt porro ullam unde omnis, minus error.</Text>
       </View>
       <Button
         onPress={() => Alert.alert('Olá mundo do botão')}
         title="Clique Aqui"
         color='#a9cf48'
         accessibilityLabel="Botão para testar botões"
       />
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   principal: {
     backgroundColor: '#333',
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   boldText: {
     fontWeight: 'bold',
     color: '#a9cf48',
     marginBottom: 10
   },
   postContainer: {
     width: '80%',
     backgroundColor: Colors.white,
     padding: 8,
     alignItems: 'center',
     margin: 10
   }
 });
 
 export default App;
 