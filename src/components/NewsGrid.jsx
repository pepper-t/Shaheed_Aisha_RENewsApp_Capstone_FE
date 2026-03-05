/*
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NewsItem } from '.'
require('dotenv').config({ path: '../../.env' })

const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=football&apiKey=`)
            setArticles(response.data.articles)
            console.log(response)
        }

        getArticles()
    }, [])
    return (
        <div>
            {articles.map(article => {
                return(
                    <NewsItem 
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                    />
                )
            })}
        </div>
    )
}

export default NewsList
*/



import '../App.css';
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Navigation from "./NavBar";
//import Form from "./component/Form";               // ✅ Add missing import
//import ArticleHeadlines from "./component/ArticleHeadlines"; // ✅ Add missing import

export default function NewsGrid() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getNewsData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=realestate&pageSize=10&apiKey=${API_KEY}`
      );
      setNewsData(response.data);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    getNewsData();
  }, []);

  return (  // ✅ Single return
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </div>
  );
}  // ✅ One closing brace



