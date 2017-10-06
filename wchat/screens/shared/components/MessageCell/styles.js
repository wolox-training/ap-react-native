import { AppRegistry, StyleSheet, Text, Image, View } from 'react-native';
import { mainColor, secondaryColor } from '../../../../shared/utils/colors.js'

const styles = StyleSheet.create({
  container: {
   padding: 12,
   marginBottom: 10,
   width: '85%',
   borderRadius: 16,
   shadowColor: '#000',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.4,
   shadowRadius: 1,
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
    textAlign: 'right',
    color: '#555'
  }
})

export default styles
