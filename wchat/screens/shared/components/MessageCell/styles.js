import { AppRegistry, StyleSheet, Text, Image, View } from 'react-native';
import { messageColor, separatorColor } from '../../../../shared/utils/colors.js'

const avatarSize = 44;

const styles = StyleSheet.create({
  container: {
   padding: 22,
   borderRadius: 22,
   backgroundColor: '#00F'
  },
  text: {
    fontSize: 14,
    textAlign: 'left',
    backgroundColor: '#0FF'
  },
  time: {
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
    marginBottom: 4,
    backgroundColor: '#FF0'
  }
})

export default styles
