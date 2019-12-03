import React, { useEffect, useState } from 'react';
import { getTopStoryIds } from '../api/hacker-news';

const StoriesContainer = () => {
  const [topStoryIds, setTopStoryIds] = useState([]);

  useEffect(() => {
    console.log('useEffect here!');
    getTopStoryIds().then(data => setTopStoryIds(data));
  }, []);

  // useEffect(() => console.log(`that happened with ${topStoryIds}`), [
  //   topStoryIds
  // ]);

  return <div>{JSON.stringify(topStoryIds)}</div>;
};

export default StoriesContainer;
