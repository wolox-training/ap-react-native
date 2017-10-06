import { AppRegistry, StyleSheet, Text, Image, View } from 'react-native';
import { mainBackgroundColor } from '../../../../shared/utils/colors.js'

const avatarSize = 38;

const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'flex-start'
  },
  icon: {
    height: avatarSize,
    width: avatarSize,
    marginRight: 8,
    borderRadius: 19,
    overflow: 'hidden',
    alignSelf: 'center'
  },
  navtitle: {
    color: mainBackgroundColor,
    fontSize: 24,
    fontWeight: 'bold',
  },
})

export default styles
