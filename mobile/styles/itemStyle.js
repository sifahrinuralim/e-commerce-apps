import { StyleSheet, Dimensions } from 'react-native';

const vw = Dimensions.get('window').width / 100
const vh = Dimensions.get('window').height / 100

const styles = StyleSheet.create({
   bookContainer: {
      backgroundColor: "#fefcf3",
      height: 40 * vh,
      width: 45 * vw,
      margin: 2 * vw,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 1,
      },
      shadowOpacity: 1,
      shadowRadius: 7,

      elevation: 11,
   },
   thumbContainer: {
      flex: 5
   },
   thumbnail: {
      flex: 1
   },
   detailContainer: {
      flex: 2,
      padding: 2 * vh,
   },
   title: {
      fontSize: 4 * vw,
      marginBottom: 1 * vh
   },
   nama: {
      fontSize: 4 * vw
   },
   stock: {
      fontSize: 3 * vw
   },
   harga: {
      fontSize: 3 * vw
   },
   optionContainer: {
      flex: 1,
      height: 5 * vh,
      justifyContent: "center",
      alignItems: "center"
   },
   touchContainer: {
      flex: 1,
      backgroundColor: "#44bb50",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      marginBottom: 1 * vh
   },
   addToCartIcon: {
      flex: 1,
      // justifyContent: "flex-end",

   }
});

export default styles