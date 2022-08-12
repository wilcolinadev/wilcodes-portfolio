import React, {useState} from "react";
import {Box, Grid, Typography} from "@mui/material";
import {SkillsBox, SkillsTitle, Element, SkillsRow, Label} from './SkillsStyles'
import {
    IoLogoReact, IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoNpm,
} from "react-icons/io5";
import {TbBrandNotion, TbBrandBootstrap, TbBrandNextjs} from "react-icons/tb";

const Skills = () => {

    const [isLabelActive, setIsLabel] = useState(false);
    const fontSize = '56px';

    return (<Box>

        <SkillsBox>

            <SkillsTitle variant={'h4'}>
                Main tools I use to build my projects
            </SkillsTitle>

            <SkillsRow container fluid="true">
                <Grid item onMouseEnter={() => setIsLabel(true)} onMouseLeave={() => setIsLabel(false)}>
                    <Element>
                        <IoLogoHtml5 fontSize={fontSize} />
                        { isLabelActive && <Label>
                            HTML5
                        </Label>}
                    </Element>
                </Grid>
                <Grid item>
                    <Element>
                        <IoLogoJavascript fontSize={fontSize}/>
                    </Element>
                </Grid>
                <Grid item>
                    <Element>
                        <IoLogoCss3 fontSize={fontSize}/>
                    </Element>
                </Grid>
                <Grid item>
                    <Element>
                        <IoLogoReact fontSize={fontSize}/>
                    </Element>
                </Grid>


                <Grid item>
                    <Element>
                        <IoLogoNpm fontSize={fontSize}/>
                    </Element>
                </Grid>

                <Grid item>
                    <Element>
                        <TbBrandBootstrap fontSize={fontSize}/>
                    </Element>
                </Grid>

                <Grid item>
                    <Element>
                        <TbBrandNextjs fontSize={fontSize}/>
                    </Element>
                </Grid>
                <Grid item>
                    <Element>
                        <TbBrandNotion fontSize={fontSize}/>
                    </Element>
                </Grid>
            </SkillsRow>
        </SkillsBox>
    </Box>)
};

export default Skills;