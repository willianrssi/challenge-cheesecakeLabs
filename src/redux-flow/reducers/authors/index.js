'use strict'

import { ADD_AUTHOR } from './actions'
import createReducer from '../create-reducer'

const initialState = {}

const authors = createReducer(initialState, {
  [ADD_AUTHOR]: (state, action) => ({
    ...state,
    [action.payload.id]: {
      id: action.payload.id,
      name: action.payload.name,
      urlImage: action.payload.urlImage
    }
  })
})

export default authors
