import styled from 'styled-components';

const FilterDelBtn = styled.button`
  cursor: pointer;
  margin-left: 20px;
  border-radius: 5px;
  background-color: #fff;
  transition: background-color 500ms cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    background-color: aqua;
  }
`;

const FilterListItem = styled.li`
  margin-bottom: 10px;
`;

export { FilterDelBtn, FilterListItem };
