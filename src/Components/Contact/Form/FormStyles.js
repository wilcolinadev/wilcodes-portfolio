import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";


export const ContactForm = styled('form')`
  padding: 1rem;
  margin: 0 auto;

  ${props => props.theme.breakpoints.up("md")} {
    width: 60%;
    padding: 0;
  }
  
  label{
    font-weight: 400;
    font-size: 1.2rem;
    margin:1rem 0;
  }

  



`;

export const FormWrapper = styled(Box)`
  background-color: rgba(255, 255, 255, 0.7);
  border-top: 2px solid #3F3D55;
  padding: 2rem;
  ${props => props.theme.breakpoints.up("md")} {
    margin-top: 2.5rem;
    padding: 0;
  }
  
 
`
export const Button = styled('button')`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
`

