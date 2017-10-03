import { AppRegistry, StyleSheet, Text, Image, View } from 'react-native';

const avatarSize = 44;

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  content: {
   flex: 1,
   flexDirection: 'row',
   marginVertical: 12,
  },
  avatar: {
    height: avatarSize,
    width: avatarSize,
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
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    textAlign: 'left',
    color: '#999',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCC',
    marginRight: 10,
    marginLeft: 70,
  }
})

export default styles
