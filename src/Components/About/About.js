import React from "react";
import Footer from "../Footer/Footer";
import Navigation from '../Navigation/Navigation';
import {Wrapper} from "../Wrapper";
import Typography from "@mui/material/Typography";
import Introduction from "./Introduction/Introduction";



const About = () => {
    return (
        <Wrapper type={'about'}>
            <Navigation/>
            <Introduction/>
            <Typography>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
                vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis
                dolore te feugait nulla facilisi.

                Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad
                nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Marquee selectus
                non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium glutimate. Quote meon
                an estimate et non interruptus stadium. Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex
                librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito. Epsum factorial non
                deposit quid pro quo hic escorol. Marquee selectus non provisio incongruous feline nolo contendre
                Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum.

                Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica,
                sport etc, li tot Europa usa li sam vocabularium. Li lingues differe solmen in li grammatica, li
                pronunciation e li plu commun vocabules. Omnicos directe al desirabilita; de un nov lingua franca: on
                refusa continuar payar custosi traductores. It solmen va esser necessi far uniform grammatica,
                pronunciation e plu sommun paroles.
            </Typography>


            <Footer/>
        </Wrapper>
    )
};

export default About;