import { StyleSheet } from 'react-native';
import { mainBackgroundColor } from '../../shared/utils/colors.js'

const iconSize = 26;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainBackgroundColor,
  },
  icon: {
   height: iconSize,
   width: iconSize,
  }
})

export default styles
