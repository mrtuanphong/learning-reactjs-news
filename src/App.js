import React, { Component, useState, useEffect } from "react";

const App = () => {
  // state
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuey]  = useState('react');
  const [url, setUrl] = useState('http://hn.algolia.com/api/v1/search?query=react');
  const [loading, setLoading] = useState(false);

  // fetch news
  const fetchNews = () => {
    setLoading(true);
    fetch(url)
      .then(result => result.json())
      .then(data => (setNews(data.hits), setLoading(false)))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchNews();
  }, [url]);
  
  const handleChange = (e) => {
    setSearchQuey(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`);
  };

  // loading:
  const showLoading = () => (
    loading ? <h5>Loading...</h5> : <h5>Results:</h5>
  );
  
  // search form:
  const searchForm = () => (
    <div className="p-3 mb-3 bg-light">
      <form onSubmit={handleSubmit} className="d-flex">
        <input className="form-control" type="text" placeholder="Enter a keyword..." value={searchQuery} onChange={handleChange} />
        <button className="btn btn-primary ml-2 px-4">Search</button>
      </form>
      <small className="text-muted">Example: react, design, marvel,...</small>
    </div>
  );

  // news content:
  const showNews = () => (
    <ol>
      {news.map((item, i) => (
        // if an item has its title then show the title:
        item.title && (
          <li key={i} className="py-1">
            <div><a href={item.url} target="_blank" title="Open in new window...">{item.title}</a></div>
            <div className="border-left pl-2">
              <div>
                <small>Author: {item.author}</small>
              </div>
              <div className="text-truncate">
                <small>URL: {item.url}</small>
              </div>
            </div>
          </li>
        )
      ))}
    </ol>
  );

  return (
    <div className="p-4">
      <div className="container">
        <h2>News</h2>
        {searchForm()}
        {showLoading()}
        {showNews()}
        <hr />
        <p>
          <small>
            Udemy course: https://www.udemy.com/course/react-tutorial/<br />
            Data is from hn.algolia.com
          </small>
        </p>
      </div>
    </div>
  );
};

export default App;
