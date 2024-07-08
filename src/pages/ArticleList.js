import React, { useEffect, useState } from "react";
import Article from "../components/Article";
import { useDispatch } from "react-redux";
import '../pages/ArticleList.css';

const ArticleList = ({ articleData, searchKeyword }) => {
    const [articles, setArticles] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    

    useEffect(() => {
        if (searchKeyword) {
            const filteredArticles = articleData.filter((article) => {
                return (article.articleTitle.toLowerCase().includes(searchKeyword) || (article.articleType && article.articleType.toLowerCase().includes(searchKeyword)));
            });
            setArticles(filteredArticles);
        }
        else {
            setArticles(articleData);
        }

        // Logic for Pagination
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        console.log(articles);
        console.log(startIndex, endIndex, articles.length);
        
        // setArticles(articles.slice(startIndex, endIndex));
        console.log(articles);
    }, [searchKeyword, articleData, currentPage]);

    if (!articles.length) {
        return <p>Loading...</p>
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      };
    
      const handleNextPage = () => {
        const totalPages = Math.ceil(articles.length / itemsPerPage);
        if (currentPage < totalPages) {
          setCurrentPage(currentPage + 1);
        }
      };

      console.log(articleData);

    return (
        <div className="news-article-page">
        <div className="article-list">
            {articles.map(article => (
                <Article key={article.articleId} article={article} />
            ))}
            
        </div>
        <button disabled={currentPage === 1} onClick={handlePreviousPage}>
        Previous
    </button>
    <button
        disabled={currentPage === Math.ceil(articles.length / itemsPerPage)}
        onClick={handleNextPage}
    >
        Next
    </button>
    </div>
    );
};

export default ArticleList;
