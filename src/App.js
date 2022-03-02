import './App.css';

import { useEffect, useState } from 'react';

function App() {

  const [articles,setArticles] = useState([])

  useEffect(()=>{
    fetch('https://api.spaceflightnewsapi.net/v3/articles')
    .then((response) => response.json())
    .then((data) => {
      setArticles(data)
    })
  },[])
  console.log(articles);

  return (
    <div className="App">
      <div className='title'>
        <h1>Space News</h1>
      </div>
      <div className='news-container'>
        {articles.map((article,index)=>{
          return (
          <div onClick={() => {window.open(article.url)}} key={index}>
            <h3>{article.title}</h3>
            <img src={article.imageUrl} alt={article.title} />
            <p>{article.summary}</p>
            <small>{article.publishedAt}</small>
          </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
