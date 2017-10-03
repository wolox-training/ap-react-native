import React, { Component } from 'react';
import GroupList from './layout.js'
import groups from '../../shared/assets/groups.json'

export default class GroupListContainer extends Component {
  render() {
    return (
      <GroupList groups={ groups } />
    );
  }
}
