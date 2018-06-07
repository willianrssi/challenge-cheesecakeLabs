'use strict'

import { db } from 'config/firebase'
import { ADD_AUTHOR } from './actions'

export const addAuthor = (item) => ({
  type: ADD_AUTHOR,
  payload: {
    ...item
  }
})

export const fetchAuthors = (authorsIds) => (dispatch) => {
  authorsIds.forEach((id) => {
    db.ref(`author/${id}`).once('value', function (snapshot) {
      dispatch(addAuthor(snapshot.val()))
    })
  })
}
