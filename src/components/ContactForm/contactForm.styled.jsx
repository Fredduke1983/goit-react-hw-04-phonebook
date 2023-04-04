import styled from 'styled-components';

const FormContact = styled.form``;
const LabelContact = styled.label``;
const InputContact = styled.input`
  margin-right: 10px;
`;
const FormBtn = styled.button`
  border-radius: 5px;
  transition: background-color 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    cursor: pointer;
    background-color: aqua;
  }
`;

export { FormContact, LabelContact, InputContact, FormBtn };
