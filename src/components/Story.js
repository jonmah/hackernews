import React, { useEffect, useState } from 'react';
import { getStory } from '../api/hacker-news';
import { StoryWrapper } from '../styles/StoryStyles';

const Story = ({ storyId }) => {
  const [story, setStory] = useState({});
  const { by, time, title, url } = story;

  useEffect(() => {
    getStory(storyId).then(data => setStory(data));
  }, [storyId]);

  return (
    <StoryWrapper data-test-id="story">
      <a href={url}>
        <p>{title}</p>
      </a>
      <p>By: {by}</p>
      <p>Posted: {time}</p>
    </StoryWrapper>
  );
};
export default Story;
