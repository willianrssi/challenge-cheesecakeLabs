'use strict'

import { ADD_NEWS } from './actions'
import createReducer from '../create-reducer'

const initialState = []

const news = createReducer(initialState, {
  [ADD_NEWS]: (state, action) => ([
    ...state,
    {
      id: action.payload.id,
      author: action.payload.author,
      category: action.payload.category,
      content: action.payload.content,
      date: action.payload.date,
      title: action.payload.title,
      size: action.payload.size,
      urlImage: action.payload.urlImage
    }
  ])
})

export default news
