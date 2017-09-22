import axios from '../config/api.js'

export function getBooks() {
  return axios.get('/books').then((response) => {
    return response.data
  })
}

export function getBook(id) {
  return axios.get('/books/' + id).then((response) => {
    return response.data
  })
}

export function getSuggestions(id) {
  return axios.get('/books/' + id + '/suggestions').then((response) => {
    return response.data
  })
}

export function getComments(id) {
  return axios.get('/books/' + id + '/comments').then((response) => {
    return response.data
  })
}
