'use strict'

import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyDsjVDF5OSiNswJ7L4kLyq8zsdKMJbkoWw',
  authDomain: 'cheesecake-news.firebaseapp.com',
  databaseURL: 'https://cheesecake-news.firebaseio.com',
  projectId: 'cheesecake-news',
  storageBucket: 'cheesecake-news.appspot.com',
  messagingSenderId: '402315793263'
})

const db = firebase.database()

export { db }
