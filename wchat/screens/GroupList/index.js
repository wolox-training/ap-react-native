import React, { Component } from 'react';
import groups from '../../shared/assets/groups.json';
import add_group_icon from '../../shared/assets/add-group.png';
import GroupCell from './components/GroupCell/index.js'
import ContactTable from '../shared/components/ContactTable/index.js'

export default class GroupListContainer extends Component {
  renderItem = ({item}) => (
    <GroupCell
      id={item.id}
      name={item.name}
      imageUrl={item.imageUrl}
    />
  );
  render() {
    return (
      <ContactTable
        data={groups}
        renderItem={this.renderItem}
        addIcon={add_group_icon}
        onAdd={()=>{}}
        />
    );
  }
}
