import { createContext,  useReducer } from 'react'

export const EntriesContext = createContext()

export const entriesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ENTRIES':
            return {
                entries: action.payload
            }
        case 'SET_ENTRIES_BY_DATE':
            return {
                etnries: state.entries.filter((entry) => entry.date == action.payload.date)
            }
        case 'CREATE_ENTRIES':
            return {
                entries: [action.payload, ...state.entries]
            }
        case 'DELETE_ENTRY':
            return {
                entries: state.entries.filter((entry) => entry._id !== action.payload._id)
            }
        case 'UPDATE_ENTRY':
            return {
                entries: state.entries.map((entry) => entry._id === action.payload._id ? action.payload : entry)
            }
        default:
          return state

    }
  
}

export const EntriesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, {
    entries: null
  })

  return (
    <EntriesContext.Provider value={{ ...state, dispatch }}>
        { children }
    </EntriesContext.Provider>
  )
}
 