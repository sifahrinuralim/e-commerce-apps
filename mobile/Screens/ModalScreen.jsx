import React, {useEffect} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

const Modal = (props) => {

   const {
      text,
      close
   } = props

   useEffect(() => {
      setTimeout(() => {
         close(false)
      }, 3000)
   })

   return (
      <View>
         <Text>{text}</Text>
         {/* <TouchableOpacity onPress={() => close(false)}>
            <Text>OK</Text>
         </TouchableOpacity> */}
      </View>
   )
}

export default Modal