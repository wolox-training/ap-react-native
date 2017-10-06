import axios from '../config/api.js'

export function getChats(ownerId, contactId) {
  const path = 'messages?senderId=' + ownerId +
  '&receiverId=' + contactId +
  '&senderId=' + contactId +
  '&receiverId=' + ownerId
  return axios.get(path).then((response) => {
    return response.data;
  })
}

export function getGroupChats(groupId) {
  return axios.get('messages', { params: { groupId } }).then((response) => {
    return response.data;
  })
}

export function getContacts() {
  return axios.get('users').then((response) => {
    return response.data;
  })
}

export function getGroups() {
  return axios.get('groups').then((response) => {
    return response.data;
  })
}

export function sendChat(params) {
  return axios.post('messages', {params}).then((response) => {
    return response.data;
  })
}
