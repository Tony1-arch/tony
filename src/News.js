import { useContext } from "react"
import React from 'react'
import NewsArticle from "./NewsArticle"
import {ContextNews} from './context/NewsState'
function News() {
    const {data} = useContext(ContextNews)
    console.log(data)
  return (
    <div>
    <h1 className="head__text">News App 👋</h1>
    <div className="all__news">
    {data? data.articles.map((news) => (
    <NewsArticle news={news} key={news.url}/>
    ) ): 'Loading...'}
   </div>
    </div>
  )
}

export default News