import React, { useEffect, useState } from 'react';
import { getTopStoryIds } from '../api/hacker-news';
import Story from '../components/Story';

const StoriesContainer = () => {
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
      {topStoryIds.map(storyId => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </>
  );
};

export default StoriesContainer;
