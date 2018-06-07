'use strict'

import { db } from 'config/firebase'
import { ADD_NEWS } from './actions'
import { fetchAuthors } from '../authors/action-creators'

export const addNews = (item) => ({
  type: ADD_NEWS,
  payload: {
    ...item
  }
})

export const fetchNews = () => (dispatch) => {
  db.ref('news').on('value', (snapshot) => {
    const news = snapshot.val()

    // pega só os ids das categorias que tem noticias recebidas
    // const categories = Object.keys(news)
    // .map((item) => news[item].category)
    // .filter((value, index, array) =>
    //   (array.indexOf(value) === index))

    Object.keys(news)
    // Pega por ordem de data mais nova primeira
    .sort((a, b) => news[a].date < news[b].date ? 1 : -1)
      .map((id, index) => ({
        id,
        author: news[id].author,
        category: news[id].category,
        content: news[id].content,
        date: news[id].date,
        title: news[id].title,
        size: (index === 0 ? 'big' : (index >= 1 && index <= 2) ? 'medium' : 'small'),
        urlImage: news[id].urlImage
      }))
    .forEach((item) => {
      dispatch(addNews(item))
    })

    // pega só os ids dos autores que tem noticias recebidas
    const authorsIds = Object.keys(news)
    .map((item) => news[item].author)
    .filter((value, index, array) =>
      (array.indexOf(value) === index))

    dispatch(fetchAuthors(authorsIds))
  })
}
