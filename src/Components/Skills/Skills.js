import React from 'react';
import { Box } from '@mui/material';
import { SkillsBox, SkillsRow, SkillsTitle } from './SkillsStyles';
import Skill from './Skill';
import useEmblaCarousel from 'embla-carousel-react';
import { styled } from '@mui/material/styles';

const CarouselBox = styled(Box)`
  background: #3f3d55;
  height: auto;
  box-sizing: border-box;
  overflow-x: hidden;
  border-radius: 5px 5px 0 0;
  padding: 0.3rem;

  .embla__container {
    display: flex;
    justify-content: left;
    align-items: center;
  }

  .embla__slide {
    flex: 0 0 auto;
    margin-right: 10px;
    margin-bottom: 20px;
  }
  ${(props) => props.theme.breakpoints.up('sm')} {
    .embla__container {
      justify-content: center;
    }
  }
`;

const EmblaContainer = styled('div')`
  overflow: hidden;
`;

const Skills = () => {
  const [emblaRef] = useEmblaCarousel({ dragFree: true });
  const skills = [
    'HTML5',
    'CCS3',
    'JavaScript',
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'Angular',
    'Git',
    'Wordpress',
    'NPM',
    'Notion',
    'Bootstrap',
  ];

  return (
    <CarouselBox>
      <SkillsTitle variant="h5">Technologies & Skills</SkillsTitle>
      <EmblaContainer className="embla" ref={emblaRef}>
        <div className="embla__container">
          {skills.map((name) => (
            <div className="embla__slide" key={name}>
              <Skill name={name} />
            </div>
          ))}
        </div>
      </EmblaContainer>
    </CarouselBox>
  );
};

export default Skills;
