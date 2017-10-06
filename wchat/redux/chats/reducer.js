import { ACTION } from './actions.js'

const initialState = {loading: false, list: []}

const chats = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.FETCH_CHATS:
      return {
        ...state,
        loading: true
      }
    case ACTION.FETCH_CHATS_SUCCESS:
    let compressed = [];
    if (action.chats.length > 0) {
      compressed.push(action.chats[0]);
      for (i = 1; i < action.chats.length; i++) {
        if (compressed[compressed.length-1].senderId == action.chats[i].senderId) {
          const fullBody = `${compressed[compressed.length-1].body}\n${action.chats[i].body}`;
          compressed[compressed.length-1].body = fullBody;
          compressed[compressed.length-1].createdAt = action.chats[i].createdAt;
        } else {
          compressed.push(action.chats[i]);
        }
      }
    }
    const newList = compressed.slice();
      return {
        ...state,
        loading: false,
        list: newList
      }
    case ACTION.FETCH_CHATS_FAILURE:
      return {
        ...state,
        loading: false
      }
    case ACTION.SUBMIT_CHAT:
      return {
        ...state,
        loading: true
      }
    case ACTION.SUBMIT_CHAT_SUCCESS:
      let submitNewList = [...state.list, action.chat];
      if (state.list.length > 0) {
        let lastChat = state.list[state.list.length - 1]
        if (lastChat.senderId == action.chat.senderId) {
          lastChat.body = `${lastChat.body}\n${action.chat.body}`;
          lastChat.createdAt = action.chat.createdAt;
          submitNewList = [...state.list.slice(0,-1), lastChat]
        }
      }
      return {
        ...state,
        loading: false,
        list: submitNewList.slice()
      }
    case ACTION.SUBMIT_CHAT_FAILURE:
      return {
        ...state,
        loading: false
      }

    default:
      return state
  }
}

export default chats
