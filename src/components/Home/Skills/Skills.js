import React from "react";
import {Box} from "@mui/material";
import {SkillsBox,SkillsTitle,Element,SkillsRow} from '../Skills/SkillsStyles'
import {
    IoLogoReact,
    IoLogoHtml5, IoLogoCss3,
    IoLogoJavascript,
    IoLogoGithub,
    IoLogoNpm,
    IoLogoStackoverflow,
    IoLogoElectron,
    IoLogoFigma,


} from "react-icons/io5";
import {TbBrandNotion,TbBrandBootstrap,TbBrandNextjs } from "react-icons/tb";


const Skills = () => {
    return (
        <Box>
            <SkillsBox>
                <SkillsTitle variant={'h4'}>
                    Main tools I use to build my projects
                </SkillsTitle>
                <SkillsRow direction={'row'}>
                    <Element>
                        <IoLogoHtml5 fontSize={'60px'}/>
                    </Element>
                    <Element>
                        <IoLogoJavascript fontSize={'60px'}/>
                    </Element>
                    <Element>
                        <IoLogoCss3 fontSize={'60px'}/>
                    </Element>
                    <Element>
                        <IoLogoReact fontSize={'60px'}/>
                    </Element>
                    <Element>
                        <IoLogoNpm fontSize={'60px'}/>
                    </Element>
                    <Element>
                        <IoLogoGithub fontSize={'60px'}/>
                    </Element>
                    <Element>
                        <TbBrandNotion fontSize={'60px'}/>
                    </Element>
                    <Element>
                        <IoLogoStackoverflow fontSize={'60px'}/>
                    </Element>
                    <Element>
                        <IoLogoElectron fontSize={'60px'}/>
                    </Element>
                    <Element>
                        <IoLogoFigma fontSize={'60px'}/>
                    </Element>
                    <Element>
                        <TbBrandBootstrap fontSize={'60px'}/>
                    </Element>
                    <Element>
                        <TbBrandNextjs  fontSize={'60px'}/>
                    </Element>
                </SkillsRow>
            </SkillsBox>
        </Box>
    )
};

export default Skills;