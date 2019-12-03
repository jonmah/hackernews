import React, { useEffect, useState } from 'react';
import { getTopStoryIds } from './api/hacker-news';

const App = () => {
  const [topStoryIds, setTopStoryIds] = useState([]);
  useEffect(() => {
    // setTopStoryIds("fuck didn't work");
    getTopStoryIds().then(topStoryIds => setTopStoryIds(topStoryIds.data));
  }, []);
  return <div>{JSON.stringify(topStoryIds)}</div>;
};

export default App;
