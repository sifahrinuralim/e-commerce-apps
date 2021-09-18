import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, AsyncStorage } from 'react-native'
import styles from '../styles/loginStyle'
import axios from 'axios';

// const contohTextInput = () => {
   
   function Login(props) {
      
      const [email, setEmail] = React.useState(null);
      const [password, setPassword] = React.useState(null);
      
      useEffect(() => {
         console.log(email,
            password)
      }, [email, password])

      const {
         navigation,
      } = props

      const verifLogin = () => {
         axios({
            url: 'http://192.168.1.6/api/login',
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {
               email,
               password
            }
         })
         .then((response) => {
            // console.log(response)
         //   AsyncStorage.setItem('nilaiToken',)
         })
         .catch((err) => {
            console.log(err)
         })
      }

      return (
         <View styles={styles.container}>
            <Text>Hello!</Text>
            <TextInput
               styles={styles.input}
               onChangeText={ (value) => setEmail(value)}
               value={email}
               placeholder="Email"
            />
            <TextInput
               styles={styles.input}
               onChangeText={ (value) => setPassword(value)}
               value={password}
               placeholder="Password"
            />
            <TouchableOpacity onPress={() => verifLogin()} >
               <Text>Login</Text>
            </TouchableOpacity>
         </View>
      )
   }
// }

export default Login