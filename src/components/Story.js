import React, { useEffect, useState } from 'react';
import { getStory } from '../api/hacker-news';

const Story = ({ storyId }) => {
  const [story, setStory] = useState({});
  const { by, id, title, url } = story;

  useEffect(() => {
    getStory(storyId).then(data => setStory(data));
  }, []);

  return (
    <div>
      <p>{title}</p>
      <p>{by}</p>
      <p>{url}</p>
    </div>
  );
};
export default Story;
