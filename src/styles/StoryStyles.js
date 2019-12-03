import styled from 'styled-components';

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
