import React from "react";
import {IconBox, SoftBox, SoxtText} from "./SoftSkillsStyles";
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import EmojiObjectsRoundedIcon from '@mui/icons-material/EmojiObjectsRounded';
import RecordVoiceOverRoundedIcon from '@mui/icons-material/RecordVoiceOverRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import BrushRoundedIcon from '@mui/icons-material/BrushRounded';
import DataObjectRoundedIcon from '@mui/icons-material/DataObjectRounded';

const SoftSkills = () => {
    return (
        <SoftBox direction={'row'}>
            <SoxtText>
                User experience
            </SoxtText>
            <IconBox>
                <PsychologyRoundedIcon/>
            </IconBox>


            <SoxtText>
                Clean code
            </SoxtText>
            <IconBox>
                <EmojiObjectsRoundedIcon/>
            </IconBox>

            <SoxtText>
                Problem Solving
            </SoxtText>
            <IconBox>
                <DataObjectRoundedIcon/>
            </IconBox>

            <SoxtText>
                Gestal principles
            </SoxtText>
            <IconBox>
                <BrushRoundedIcon/>
            </IconBox>

            <SoxtText>
                Work Ethic
            </SoxtText>
            <IconBox>
                <LanguageRoundedIcon/>
            </IconBox>

            <SoxtText>
                Effective Comunication
            </SoxtText>
            <IconBox>
                <RecordVoiceOverRoundedIcon/>
            </IconBox>
        </SoftBox>
    )
};

export default SoftSkills