import { AppRegistry, StyleSheet, Text, Image, View } from 'react-native';
import { overBackgroundColor } from '../../../../shared/utils/colors.js'

const iconSize = 80;

const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: 'row',
   marginVertical: 12,
  },
  image: {
    height: iconSize,
    width: iconSize,
    marginLeft: 16,
    borderRadius: 22,
    overflow: 'hidden',
    backgroundColor: overBackgroundColor,
  },
  info: {
   flex: 1,
   marginLeft: 10,
   justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
  },
})

export default styles
