import React from 'react'
import {StyleSheet ,View, Text} from 'react-native'
import Item from './Item'

function ItemList (props) {
   const {
      items,
      openModal,
      modalText,
      navigation
   } = props


   if (items.length < 1) {
      return (
         <View>
            <Text>Loading</Text>
         </View>
      )
   } else {
      return (
         <View style={styles.ItemList}>
            {
               items.map((item, key) => {
                  return (
                     <Item item={item} key={key} openModal={openModal} modalText={modalText} navigation={navigation}/>
                  )
               })
            }
         </View>
      )
   }
}

const styles = StyleSheet.create({
   ItemList: {
      flexDirection: "row",
      justifyContent: 'flex-start',
      flexWrap: "wrap"
   }
})

export default ItemList