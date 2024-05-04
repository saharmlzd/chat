import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    messages: [],
    loading: false
}

const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        setMessageList(state, action) {
            state.messages = [...action.payload]
        },
        addMoreMessages(state, action) {
            state.messages = [...state.messages, ...action.payload]
        },
        addMessage(state, action) {
            state.messages.push(action.payload)
        },
        removeMessage(state, action) {
            state.messages = state.messages.filter(message => message.id !== action.payload)
        },
        updateMessage(state, action) {
            const index = state.messages.findIndex(message => message.id === action.payload.id)
            if (index !== -1) {
                state.messages[index] = action.payload
            }
        },
        setLoading(state, action) {
            state.loading = action.payload
        }
    }
})

export const { addMessage, removeMessage, updateMessage, setMessageList, addMoreMessages, setLoading } = messagesSlice.actions

export default messagesSlice.reducer
