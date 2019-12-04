import React, { useEffect, useState } from 'react';
import { getTopStoryIds } from '../api/hacker-news';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

import Story from '../components/Story';

const StoriesContainer = () => {
  const { count } = useInfiniteScroll();
  const [topStoryIds, setTopStoryIds] = useState([]);

  useEffect(() => {
    getTopStoryIds().then(data => setTopStoryIds(data));
  }, []);

  // useEffect(() => console.log(`that happened with ${topStoryIds}`), [
  //   topStoryIds
  // ]);

  return (
    <>
      <h1>Hacker News Stories</h1>
      {topStoryIds.slice(0, count).map(storyId => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </>
  );
};

export default StoriesContainer;
