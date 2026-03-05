
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from '../components/NewsItem'
//require('dotenv').config({ path: '../../.env' })

const NewsGrid = () => {
    const [articles, setArticles] = useState([])
const API_KEY = import.meta.env.VITE_API_KEY;
    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=realestate&apiKey=${API_KEY}`)
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

export default NewsGrid



/*
import '../App.css';
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import HomePage from "./homepage";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Navigation from "../components/NavBar";

//import Form from "./component/Form";               // ✅ Add missing import
//import ArticleHeadlines from "./component/ArticleHeadlines"; // ✅ Add missing import

export default function RealEstateNews() {
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
        <Route path="/real-estate-news" element={<Real Estate News />} />
      </Routes>
      
    </div>
  );
}  // ✅ One closing brace


*/
