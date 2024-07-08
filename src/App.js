import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { GetAllArticles } from './fetchAPI/GetAllArticles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ArticleList from './pages/ArticleList';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';

function App() {
  const [articles, setArticles] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    const fetchArticlesData = async () => {
      const fetchedArticles = await GetAllArticles(searchKeyword);
      setArticles(fetchedArticles);
    }
    fetchArticlesData();
  }, []);

  console.log(articles);

  const handleInputChange = (inputValue) => {
    setSearchKeyword(inputValue.toLowerCase());
  }

  return (
    <div className="App">
      <Navbar onSearchChange={handleInputChange} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ArticleList articleData={articles} searchKeyword={searchKeyword} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
