import React, { useEffect, useState } from 'react';
import { getStory } from '../api/hacker-news';
import { StoryWrapper } from '../styles/StoryStyles';

const Story = ({ storyId }) => {
  const [story, setStory] = useState({});
  const { by, title, url } = story;

  useEffect(() => {
    getStory(storyId).then(data => setStory(data));
  }, []);

  return (
    <StoryWrapper>
      <p>{title}</p>
      <p>{by}</p>
      <p>{url}</p>
    </StoryWrapper>
  );
};
export default Story;
