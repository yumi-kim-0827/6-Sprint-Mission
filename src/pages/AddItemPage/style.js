import styled from 'styled-components';

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -2.5rem;
`;

export const AddItemTitle = styled.h2`
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 2.09rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 5rem;
`;

export const TagList = styled.ul`
  display: flex;
  gap: 0.75rem;
  padding: 0;
  margin: 0;
`;

export const Tag = styled.li`
  height: 48px;
  padding: 0.75rem 0.75rem 0.75rem 1rem;
  border-radius: 6.25rem;
  background-color: var(--gray-50);

  font-family: 400;
  font-size: 1rem;
  line-height: 1.5rem;

  display: flex;
  gap: 0.5rem;

  & img {
    cursor: pointer;
  }
`;
