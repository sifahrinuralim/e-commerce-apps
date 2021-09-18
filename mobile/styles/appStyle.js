import { StyleSheet, Dimensions } from 'react-native';

const vw = Dimensions.get('window').width / 100
const vh = Dimensions.get('window').height / 100

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: "#C6F2EB",
     paddingBottom: 3 * vh
     // flexDirection: "row",
   },
   text: {
 
   },
   scrollview: {
   //   flex: 1,
     height: vh * 80,
     width: vw * 100,
     marginTop: 1 * vh,
   }
 });

 export default styles