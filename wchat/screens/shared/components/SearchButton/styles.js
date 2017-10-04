import { StyleSheet } from 'react-native';

const buttonSize = 44;
const iconSize = 26;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: buttonSize,
    width: buttonSize,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnIcon: {
    height: iconSize,
    width: iconSize,
    tintColor: 'white',
 },
})

export default styles
