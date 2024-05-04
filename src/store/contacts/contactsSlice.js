import { createSlice } from '@reduxjs/toolkit'
import profile1 from '@/assets/images/1.jpeg'
import profile2 from '@/assets/images/2.jpeg'
import profile3 from '@/assets/images/3.jpeg'

const initialState = {
    contacts: [
        { id: 1, name: 'DeveshOjha', profile: profile1 },
        { id: 2, name: 'Sachin', profile: profile2 },
        { id: 3, name: 'Mohittyagi', profile: profile3 }
    ]
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact(state, action) {
            state.contacts.push(action.payload)
        },
        removeContact(state, action) {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        },
        updateContact(state, action) {
            const index = state.contacts.findIndex(contact => contact.id === action.payload.id)
            if (index !== -1) {
                state.contacts[index] = action.payload
            }
        }
    }
})

export const { addContact, removeContact, updateContact } = contactsSlice.actions

export default contactsSlice.reducer
