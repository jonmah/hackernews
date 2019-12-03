import axios from 'axios';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const topStoriesUrl = `${baseUrl}topstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getTopStoryIds = async () => {
  const result = await axios.get(topStoriesUrl).then(data => data);
  return result;
};
