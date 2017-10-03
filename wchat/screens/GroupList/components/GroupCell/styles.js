import { AppRegistry, StyleSheet, Text, Image, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: 'row',
   marginVertical: 12,
  },
  image: {
    height: 80,
    width: 80,
    marginLeft: 16,
    borderRadius: 22,
    overflow: 'hidden',
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
