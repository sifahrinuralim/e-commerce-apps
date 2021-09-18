import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, BackHandler, Alert } from 'react-native';

import axios from 'axios'

import ItemList from '../Components/ItemList'
import Header from '../Components/Header'
import Modal from './ModalScreen'

import styles from '../styles/appStyle'

export default function Main(props) {

  const {
    navigation
  } = props

  const [items, setItems] = useState([])

  useEffect(() => {
    fetchItems()
  }, [])

  useEffect(() => {
    const backButton = () => {
      Alert.alert("Warning", "Do you want to quit?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "Yes", onPress: () => BackHandler.exitApp() },
      ]);
      return true
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backButton)

    return () => backHandler.remove()
  }, [])

  const [toggleModal, setToggleModal] = useState(false)
  const [modalText, setModalText] = useState(false)

  
  const fetchItems = () => {
    axios({
      method: "GET",
      url: "http://192.168.1.6:8000/item/customer",
    })
      .then((response) => {
        setItems(response.data.data)
      })
      .catch((err) => console.log('error: ', err))
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#9f9f9f" hidden={false} />
      <Header />
      {
        toggleModal ?
          <Modal text={modalText} close={setToggleModal} />
          : null
      }
      <ScrollView style={styles.scrollview}>
        <ItemList items={items} openModal={setToggleModal} modalText={setModalText} navigation={navigation}/>
      </ScrollView>
    </View>
  );
}
