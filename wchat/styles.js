import { StyleSheet } from 'react-native';
import { mainColor, backgroundColor } from './shared/utils/colors.js'

const styles = StyleSheet.create({
  navbar: {
   backgroundColor: mainColor,
 },
 navtitle: {
   color: backgroundColor,
   fontSize: 24,
   fontWeight: 'bold',
 }
})

export default styles
