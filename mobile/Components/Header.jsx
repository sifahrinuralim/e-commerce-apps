import React from 'react'
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native'
import styles from '../styles/headerStyle'
import Login from '../Components/Login'

function Header () {

   return (
   <View style={styles.header}>
      <TouchableOpacity>
         <Image style={styles.icons} source={require('../Assets/icons8-menu-24.png')} />
      </TouchableOpacity>

      <TouchableOpacity>
         <Image style={styles.icons}
         source={require('../Assets/icons8-menu-24.png')}
         onPress={() => navigation.navigate('Login')} />
      </TouchableOpacity>

      <Image style={styles.icons} source={require('../Assets/icons8-book-100.png')} />

      <TouchableOpacity>
         <Image style={styles.icons} source={require('../Assets/icons8-shopping-cart-160.png')} />
      </TouchableOpacity>
   </View>
   )
}

export default Header