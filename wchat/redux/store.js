import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import chats from './chats/reducer.js'
import contacts from './contacts/reducer.js'
import groups from './groups/reducer.js'

const reducer = combineReducers({
  chats,
  contacts,
  groups
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
