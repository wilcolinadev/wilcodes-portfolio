import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

export const ContactForm = styled('form')`
  margin: 0 auto;
  width: 100%;

  label {
    font-weight: 400;
    font-size: 1.2rem;
    margin: 1rem 0;
    color: #3f3d55;
  }
`;

export const FormDescription = styled(Typography)`
  font-family: 'inconsolata', monospace;
  padding: 1rem 0;
  color: #3f3d55;
`;

export const Button = styled((props) => <button {...props} />)`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 1rem 0 2rem;
  color: ${(props) => (props.disabled ? '#c7c4c4' : '#3F3D55;')};
`;
export const FormInput = styled('input')`
  font-family: 'inconsolata', monospace;
  width: 100%;
  border: none;
  padding: 1rem;
  background-color: #f7f3f3;
  font-size: 1.1rem;

  &:focus {
    outline: none !important;
    box-shadow: 0 0 5px #5b9675;
  }
`;

export const FormArea = styled('textarea')`
  width: 100%;
  height: 150px;
  font-family: 'inconsolata', monospace;
  border: none;
  padding: 1rem;
  background-color: #f7f3f3;
  font-size: 1.1rem;

  &:focus {
    outline: none !important;
    box-shadow: 0 0 5px #5b9675;
  }
`;

export const FileLabel = styled('label')`
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: underline;
  padding: 0.5rem 0;
`;
