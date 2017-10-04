import { StyleSheet } from 'react-native';
import { mainColor, mainBackgroundColor } from '../shared/utils/colors.js'

const iconSize = 26;

const styles = StyleSheet.create({
  navbar: {
   backgroundColor: mainColor,
 },
 navtitle: {
   color: mainBackgroundColor,
   fontSize: 24,
   fontWeight: 'bold',
 },
 tabbar: {
   backgroundColor: mainBackgroundColor,
 },
 icon: {
  height: iconSize,
  width: iconSize,
 }
})

export default styles
