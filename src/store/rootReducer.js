import { combineReducers } from '@reduxjs/toolkit'
import contactsReducer from './contacts/contactsSlice'
import messagesReducer from './messages/messagesSlice'

const rootReducer = combineReducers({
    contacts: contactsReducer,
    messages: messagesReducer
})

export default rootReducer
