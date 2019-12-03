import React, { useEffect, useState } from 'react';
import { getStory } from '../api/hacker-news';
import { StoryMeta, StoryTitle, StoryWrapper } from '../styles/StoryStyles';

const Story = ({ storyId }) => {
  const [story, setStory] = useState({});
  const { by, time, title, url } = story;

  useEffect(() => {
    getStory(storyId).then(data => setStory(data));
  }, [storyId]);

  return (
    <StoryWrapper data-test-id="story">
      <StoryTitle>
        <a href={url}>
          <p>{title}</p>
        </a>
      </StoryTitle>
      <StoryMeta>By: {by}</StoryMeta>
      <StoryMeta>Posted: {time}</StoryMeta>
    </StoryWrapper>
  );
};
export default Story;
