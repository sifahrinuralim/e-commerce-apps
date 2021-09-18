import { StyleSheet, Dimensions } from 'react-native';

const vw = Dimensions.get('window').width / 100
const vh = Dimensions.get('window').height / 100

const styles = StyleSheet.create({
   header: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingTop: 4 * vh,
      paddingHorizontal: 2 * vw,
      backgroundColor: "#2fd0b8",
      height: 11.5 * vh,
      width: 100 * vw,
   },
   icons: {
      width: 50,
      height: 50,
   }
 });

 export default styles