import { StyleSheet } from 'react-native';
import { secondaryColor } from '../../../../shared/utils/colors.js'

const buttonSize = 50;
const buttonMargin = 26;
const iconSize = 30;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    right: buttonMargin,
    bottom: buttonMargin,
    height: buttonSize,
    width: buttonSize,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: secondaryColor,
    borderRadius: 30,
    overflow: 'hidden',
    position: 'absolute',
  },
  btnIcon: {
    height: iconSize,
    width: iconSize,
    tintColor: 'white',
 },
})

export default styles
