import { AppRegistry, StyleSheet, Text, Image, View } from 'react-native';
import {
  mainColor,
  mainBackgroundColor,
  overBackgroundColor
} from '../../../../shared/utils/colors.js'

const inputBaseHeight = 36;
const buttonSize = inputBaseHeight;
const iconSize = 22;

const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: 'row',
   flexGrow: 0,
   flexBasis: inputBaseHeight
 },
  textInput: {
    flex: 1,
    padding: 8,
    marginRight: 12,
    height: inputBaseHeight,
    backgroundColor: mainBackgroundColor,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: overBackgroundColor,
    fontSize: 18,
    textAlign: 'left'
  },
  btnContainer: {
    height: buttonSize,
    width: buttonSize,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: mainColor,
    borderRadius: 10,
    flexBasis: buttonSize
  },
  btnIcon: {
    height: iconSize,
    width: iconSize,
    tintColor: 'white',
 },
})

export default styles
