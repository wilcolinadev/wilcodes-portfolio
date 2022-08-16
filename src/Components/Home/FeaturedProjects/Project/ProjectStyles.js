import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";


export const ProjectBox = styled('div')`
  text-align: center;
  
`

export const ProjectImage = styled('img')`

  width: 80%;
  height: auto;
  border: 2px solid #000000;
  border-radius: 10px;
  cursor: pointer;
  transition: .5s;
  margin-bottom: 2.5rem;
  &:hover, &:active {
   
    --c: #000000; /* the color */
    color: #0000;
    padding-bottom: var(--s);
    box-shadow: 10px 8px #000;
    background: linear-gradient(45deg, var(--c) 50%, #000 0) calc(50% - var(--_p,0%))/50% 50%,
    linear-gradient(var(--c) 0 0) 0% 100%/var(--_p,0%) var(--s) no-repeat;
    -webkit-background-clip: text, padding-box;
    transition: 0.5s;
   
  }
`


export const ProjectTitle =  styled(Typography)`
  font-family: 'Open sans', monospace;
  margin: 1rem 0 1rem 0;
  transition: background-size .5s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;

  * {
    color: #3F3D55;
  }

  a:hover, a:active {
    transition: .9ms ease-in-out;
  }
`

export const ProjectDescription = styled(Typography)`
  font-family: 'Open sans', monospace;
  width: 70%;
  margin: 1.5rem auto;
  text-align: justify;
  font-size: 1.1rem;
`
