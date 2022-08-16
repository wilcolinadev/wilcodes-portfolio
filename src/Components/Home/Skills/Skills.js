import React from "react";
import {Box} from "@mui/material";
import {SkillsBox, SkillsTitle, SkillsRow,} from './SkillsStyles'
import Skill from './Skill';

const Skills = () => {
    const skills = ['Html5', 'CCS3', 'JavaScript', 'React', 'Next.js', 'NPM', 'Notion', 'BootsTrap'];


    return (<Box>
        <SkillsBox>

            <SkillsTitle variant={'h4'}>
                Core tools I use to build my projects 🛠
            </SkillsTitle>

            <SkillsRow>
                {skills.map(name => <Skill name={name} key={name}/>)}
            </SkillsRow>
        </SkillsBox>
    </Box>)
};

export default Skills;