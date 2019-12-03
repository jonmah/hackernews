import React, { useEffect, useState } from 'react';
import { getStory } from '../api/hacker-news';

const Story = ({ storyId }) => {
  const [story, setStory] = useState({});
  useEffect(() => {
    getStory(storyId).then(data => setStory(data));
  }, []);
  return <div>I am story number {storyId}</div>;
};
export default Story;
