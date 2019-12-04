import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle``;

export const StoryMeta = styled.div`
  font-style: italic;

  > span:not(first-child):before {
    content: '•';
    margin: 0 0.5rem;
  }

  .story__meta-bold {
    font-weight: bold;
  }
`;

export const StoryMetaElement = styled.span`
  color: ${props => props.color || 'red'}
  font-weight: bold;
`;

export const StoryTitle = styled.h1`
  font-size: 1rem;
  line-height: 1.8;
  margin: 0;
  margin-bottom: 0.5rem;
  text-decoration: none;

  a {
    background-color: #f8dc3d;
    color: #2e2e2c;
    text-decoration: none;
  }
`;

export const StoryWrapper = styled.section`
  border-top: 1px solid #ccc;
  margin-bottom: 0.75rem;
  padding-top: 0.5rem;

  &:first-of-type {
    border-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;
