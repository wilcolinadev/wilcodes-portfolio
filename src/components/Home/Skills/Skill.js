import React, {useState} from "react";
import {Element, Label} from "./SkillsStyles";
import {GridController} from "./SkillsStyles";
import {
    IoLogoReact, IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoNpm,
} from "react-icons/io5";
import {TbBrandNotion, TbBrandBootstrap, TbBrandNextjs} from "react-icons/tb";

const Skill = ({name}) => {
    //Create function to return the icon needed
    const determineElement = () => {
        const fontSize = '45px';
        switch (name) {
            case 'Html5':
                return (<IoLogoHtml5 fontSize={fontSize}/>)
            case 'JavaScript':
                return (<IoLogoJavascript fontSize={fontSize}/>)
            case 'React':
                return (<IoLogoReact fontSize={fontSize}/>)
            case 'Next.js':
                return (<TbBrandNextjs fontSize={fontSize}/>)
            case 'NPM':
                return (<IoLogoNpm fontSize={fontSize}/>)
            case 'Notion':
                return (<TbBrandNotion fontSize={fontSize}/>)
            case 'BootsTrap':
                return (<TbBrandBootstrap fontSize={fontSize}/>)
            case 'CCS3':
                return (<IoLogoCss3 fontSize={fontSize}/>)
        }
    }
    const [isLabelActive, setIsLabel] = useState(false);
    return (<GridController onMouseEnter={() => setIsLabel(true)} onMouseLeave={() => setIsLabel(false)}>
        <Element>
            {determineElement()}
            {isLabelActive && <Label>
                {name}
            </Label>}
        </Element>
    </GridController>)
};

export default Skill;