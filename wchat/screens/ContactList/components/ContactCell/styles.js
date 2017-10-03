import { AppRegistry, StyleSheet, Text, Image, View } from 'react-native';
import { messageColor, separatorColor } from '../../../../shared/utils/colors.js'

const avatarSize = 44;

const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: 'row',
   alignItems: 'stretch',
   alignContent: 'stretch',
   height: 70,
  },
  avatar: {
    height: avatarSize,
    width: avatarSize,
    marginLeft: 16,
    borderRadius: 22,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  info: {
   flex: 1,
   marginHorizontal: 10,
   justifyContent: 'center',
   borderBottomWidth: 1,
   borderBottomColor: separatorColor,
  },
  name: {
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    textAlign: 'left',
    color: messageColor,
  }
})

export default styles
