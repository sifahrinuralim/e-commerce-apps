import React from 'react'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import styles from '../styles/itemStyle'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Value } from 'react-native-reanimated';

function Item(props) {

   const {
      item,
      openModal,
      modalText,
      navigation
   } = props

   const checkout = () => {
      Alert.alert(
         "Checkout",
         "Do you want to add this book into your Cart?",
         [
            {
               text: "No",
               onPress: () => null,
               style: "cancel"
            },
            {
               text: "Yes",
               onPress: () => {
                  cekLogin();
               },
            }
         ]
      )
      return true
   }

   const cekLogin = async () => {
      try {
         const token = await AsyncStorage.getItem('nilaiToken')
         if(Value !== null) {
            navigation.navigate('Login')
         } else {
            modalText("Added to cart")
            openModal(true)
         }
      }
      catch (err) {
         console.log(err)
      }
   }

   return (
      <View style={styles.bookContainer}>
         {/* <View style={styles.thumbContainer}>
         <Image 
            style={styles.thumbnail}
            source={{uri: book.thumbnail}}
            resizeMode="center" 
         />
      </View> */}

         <View style={styles.detailContainer} />
         <View style={styles.detailContainer} />

         <View style={styles.detailContainer}>
            <Text style={styles.nama} >
               {item.nama}
            </Text>
            <Text style={styles.stock}>
               Stock : {item.stock}
            </Text>
            <Text style={styles.harga}>
               Harga : {item.harga}
            </Text>
         </View>

         <View style={styles.optionContainer}>
            <TouchableOpacity style={styles.touchContainer} onPress={() => checkout()}>
               <Image
                  style={styles.addToCartIcon}
                  source={require('../Assets/icons8-shopping-cart-160.png')}
                  resizeMode="contain"
               />
            </TouchableOpacity>
         </View>
      </View>
   )
}

export default Item