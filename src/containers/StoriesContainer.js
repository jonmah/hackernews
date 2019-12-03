import React, { useEffect, useState } from 'react';
import { getStory, getTopStoryIds } from '../api/hacker-news';
import Story from '../components/Story';

const StoriesContainer = () => {
  const [topStoryIds, setTopStoryIds] = useState([]);

  useEffect(() => {
    console.log('useEffect here!');
    getTopStoryIds().then(data => setTopStoryIds(data));
    getStory(21694891).then(data => console.log(data));
    // storyIds && storyIds.length > 0
  }, []);

  // useEffect(() => console.log(`that happened with ${topStoryIds}`), [
  //   topStoryIds
  // ]);

  return topStoryIds.map(storyId => <Story storyId={storyId} />);
};

export default StoriesContainer;
