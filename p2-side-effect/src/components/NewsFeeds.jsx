import React, { useState, useEffect } from 'react';

function NewsFeeds() {
  const defaultNews = {
    status: 'ok',
    totalResult: 0,
    articles: [],
  };

  const [news, setNews] = useState(defaultNews);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [refresh, setRefresh] = useState(false);

  const endPoint =
    'https://newsapi.org/v2/top-headlines?country=id&apiKey=fcccb525c95b47e1ae56d0dac4631b38';

  const handleGetNews = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${endPoint}&page=${page}&pageSize=10`);
      const result = await response.json();

      setNews((prevData) => {
        return {
          ...result,
          articles: [...prevData.articles, ...result.articles],
          totalResults: result.totalResults,
          status: result.status,
        };
      });

      if (result.status !== 'ok') {
        throw new Error('error');
      }
    } catch {
      setError(true);
    }

    setLoading(false);
  };

  const handleRefresh = async () => {
    if (page > 1) {
      setNews(defaultNews);
      setPage(1);
      setLoading(false);
    } else {
      setNews(defaultNews);
      handleGetNews();
    }
  };

  useEffect(() => {
    handleGetNews();
  }, [page]);

  return (
    <>
      <h1>Top News Headlines</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Terjadi kesalahan server</p>}

      <ol>
        {news.articles.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </ol>

      {news.articles.length < news.totalResults && (
        <button
          type="button"
          style={{ marginRight: '2em' }}
          disabled={loading}
          onClick={() => setPage((p) => p + 1)}
        >
          Load More
        </button>
      )}

      <button type="button" disabled={loading} onClick={handleRefresh}>
        Refresh
      </button>
    </>
  );
}

export default NewsFeeds;
