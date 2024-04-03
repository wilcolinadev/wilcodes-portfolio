import React, { useState } from 'react';
import { Element, GridController, Label } from './SkillsStyles';
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoLogoNpm, IoLogoReact } from 'react-icons/io5';
import { TbBrandBootstrap, TbBrandNextjs, TbBrandNotion } from 'react-icons/tb';
import { DiNodejs } from 'react-icons/di';
import { SiTsnode } from 'react-icons/si';
import { FaAngular } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa';
import { FaWordpress } from 'react-icons/fa';
const Skill = ({ name }) => {
  const determineElement = () => {
    const fontSize = '45px';
    switch (name) {
      case 'HTML5':
        return <IoLogoHtml5 fontSize={fontSize} />;
      case 'JavaScript':
        return <IoLogoJavascript fontSize={fontSize} />;
      case 'React':
        return <IoLogoReact fontSize={fontSize} />;
      case 'Next.js':
        return <TbBrandNextjs fontSize={fontSize} />;
      case 'NPM':
        return <IoLogoNpm fontSize={fontSize} />;
      case 'Notion':
        return <TbBrandNotion fontSize={fontSize} />;
      case 'Bootstrap':
        return <TbBrandBootstrap fontSize={fontSize} />;
      case 'CCS3':
        return <IoLogoCss3 fontSize={fontSize} />;
      case 'Node.js':
        return <DiNodejs fontSize={fontSize} />;
      case 'TypeScript':
        return <SiTsnode fontSize={fontSize} />;
      case 'Angular':
        return <FaAngular fontSize={fontSize} />;
      case 'Git':
        return <FaGitAlt fontSize={fontSize} />;
      case 'Wordpress':
        return <FaWordpress fontSize={fontSize} />;
    }
  };
  const [isLabelActive, setIsLabel] = useState(false);
  return (
    <GridController onMouseEnter={() => setIsLabel(true)} onMouseLeave={() => setIsLabel(false)}>
      <Element>
        {determineElement()}
        {isLabelActive && <Label>{name}</Label>}
      </Element>
    </GridController>
  );
};

export default Skill;
