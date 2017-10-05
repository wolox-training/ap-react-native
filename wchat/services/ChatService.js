import axios from '../config/api.js'

export function getChats() {
  return axios.get('messages').then((response) => {
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
