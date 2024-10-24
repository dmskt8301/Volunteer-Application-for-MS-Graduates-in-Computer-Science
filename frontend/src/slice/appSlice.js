import { createSlice } from '@reduxjs/toolkit'
import notify from '../util/notify'
import fetch from '../util/fetch'

const initialState = {
  appUser: null,
  stats: {},
  chatsCount: 0,
  chatsList: [],
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppUser: (state, action) => {
      state.appUser = action.payload
    },

    setStats: (state, action) => {
      state.stats = action.payload
    },

    setChatsCount: (state, action) => {
      state.chatsCount = action.payload
    },

    setChatsList: (state, action) => {
      state.chatsList = action.payload
    },
  },
})

export const { setAppUser, setStats, setChatsCount, setChatsList } =
  appSlice.actions
export default appSlice.reducer

export const fetchChatsList = () => async dispatch => {
  try {
    const { data } = await fetch.get({
      url: `/api/chat-list`,
    })

    if (data.length) {
      const count = data.reduce((prev, curr) => {
        return prev + curr.unread_count
      }, 0)

      dispatch(setChatsCount(count))
      dispatch(setChatsList(data))
    }
  } catch (error) {
    notify({
      type: 'error',
      message: error.message || 'Something went wrong',
    })
  }
}
