import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './styles.js'
import search_icon  from '../../../../shared/assets/search.png'

const SearchButton = () => {
  return (
    <TouchableOpacity onPress={()=>{}} style={styles.container}>
      <Image style={styles.btnIcon} source={search_icon} />
    </TouchableOpacity>
  );
}

export default SearchButton
