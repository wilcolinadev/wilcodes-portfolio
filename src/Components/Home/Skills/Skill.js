import React, { useState } from 'react';
import { Element, GridController, Label } from './SkillsStyles';
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoLogoNpm, IoLogoReact } from 'react-icons/io5';
import { TbBrandBootstrap, TbBrandNextjs, TbBrandNotion } from 'react-icons/tb';

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
