import { AppRegistry, StyleSheet, Text, Image, View } from 'react-native';
import { mainColor, secondaryColor } from '../../../../shared/utils/colors.js'

const avatarSize = 44;

const styles = StyleSheet.create({
  container: {
   padding: 12,
   borderRadius: 16,
   backgroundColor: secondaryColor,
   marginBottom: 10,
   width: '85%'
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
