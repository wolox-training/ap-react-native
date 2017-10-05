import { AppRegistry, StyleSheet, Text, Image, View } from 'react-native';
import { mainColor, secondaryColor } from '../../../../shared/utils/colors.js'

const styles = StyleSheet.create({
  container: {
   padding: 12,
   marginBottom: 10,
   width: '85%',
   borderRadius: 16
  },
  owner: {
   borderTopRightRadius: 4,
   backgroundColor: mainColor,
   alignSelf: 'flex-end'
  },
  contact: {
   borderTopLeftRadius: 4,
   backgroundColor: secondaryColor
  },
  text: {
    fontSize: 18,
    textAlign: 'left'
  },
  time: {
    fontSize: 12,
    textAlign: 'right'
  }
})

export default styles
