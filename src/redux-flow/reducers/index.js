'use strict'

import authors from './authors'
import news from './news'
import { combineReducers } from 'redux'

export default combineReducers({
  authors,
  news
})
