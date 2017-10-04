import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import add_group_icon from '../../shared/assets/add-group.png';
import GroupCell from './components/GroupCell/index.js'
import ContactTable from '../shared/components/ContactTable/index.js'
import { actionCreators as groupsActions } from '../../redux/groups/actions.js'

class GroupListContainer extends Component {
  componentWillMount() {
    this.props.dispatch(groupsActions.fetchGroups())
  }
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
        data={this.props.groups}
        renderItem={this.renderItem}
        addIcon={add_group_icon}
        onAdd={()=>{}}
        />
    );
  }
}

GroupListContainer.defaultProps = {
  groups: []
};

GroupListContainer.propTypes = {
  groups: PropTypes.array
};

const mapStateToProps = (state) => ({
  groups: state.groups.list
})

export default connect(
  mapStateToProps,
)(GroupListContainer);
