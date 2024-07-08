import React from "react";
import '../components/Article.css';

const Article = ({article}) => {
    return(
        <div className="article-card">
            <div className="article-title">Article Title: {article.articleTitle}</div>
            {article.articleType &&<div className="article-type">Type: {article.articleType}</div>}
            Link: <a className="article-url" href={article.articleUrl}>{article.articleUrl}</a>
        </div>
    );
};

export default Article;
