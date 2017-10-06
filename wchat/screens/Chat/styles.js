import { AppRegistry, StyleSheet, Text, Image, View } from 'react-native';
import { mainBackgroundColor } from '../../shared/utils/colors.js'

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'space-between',
   backgroundColor: mainBackgroundColor,
   padding: 10
  }
})

export default styles
