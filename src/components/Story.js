import React, { useEffect, useState } from 'react';
import { getStory } from '../api/hacker-news';
import {
  StoryMeta,
  StoryMetaElement,
  StoryTitle,
  StoryWrapper
} from '../styles/StoryStyles';

const Story = ({ storyId }) => {
  const [story, setStory] = useState({});
  const { by, time, title, url } = story;

  useEffect(() => {
    getStory(storyId).then(data => setStory(data));
  }, [storyId]);

  return (
    <StoryWrapper data-test-id="story">
      <StoryTitle>
        <a href={url}>{title}</a>
      </StoryTitle>
      <StoryMeta>
        <span className="story__by" data-test-id="story-by">
          <StoryMetaElement>By:</StoryMetaElement> {by}
        </span>
      </StoryMeta>
      <StoryMeta>
        <span className="story__time" data-test-id="story-time">
          <StoryMetaElement>Posted:</StoryMetaElement> {time}
        </span>
      </StoryMeta>
    </StoryWrapper>
  );
};
export default Story;
