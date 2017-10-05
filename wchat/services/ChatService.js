import axios from '../config/api.js'

export function getChats(ownerId, contactId) {
  const path = 'messages?senderId=' + ownerId +
  '&receiverId=' + contactId +
  '&senderId=' + contactId +
  '&receiverId=' + ownerId
  return axios.get(path).then((response) => {
    console.log('got response:' + response)
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
