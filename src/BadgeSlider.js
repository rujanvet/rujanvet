import React, { useRef, useEffect } from "react";
import Splide from "@splidejs/splide";
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import PetsIcon from '@mui/icons-material/Pets';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import BiotechIcon from '@mui/icons-material/Biotech';
import MasksIcon from '@mui/icons-material/Masks';

const BadgeSlider = () => {
    const splideRef = useRef(null);

    useEffect(() => {
        if (splideRef.current !== null) {
            const splide = new Splide(splideRef.current, {
                type: "loop",
                perPage: 3,
                perMove: 1,
                autoplay: true,
                interval: 3000,
            });

            splide.mount();
        }
    }, []);


    return (
        <Grid container spacing={0} justifyContent="space-evenly" className={"badges"}>
            <Grid item>
                <Item className={"badge"}>
                    <PetsIcon fontSize={"large"} htmlColor={"#499fe1ff"} />
                    <h1 className={"swot"}>
                        cabinet <br />veterinar
                    </h1>
                </Item>
            </Grid>
            <Grid item>
                <Item className={"badge"}>
                    <MasksIcon fontSize={"large"} htmlColor={"#4824bcff"} />
                    <h1 className={"swot"}>
                        chirurgie <br />veterinara
                    </h1>
                </Item>
            </Grid>
            <Grid item>
                <Item className={"badge"}>
                    <ContentCutIcon fontSize={"large"} htmlColor={"#eb5160ff"} />
                    <h1 className={"swot"}>
                        frizerie<br /> canina
                    </h1>
                </Item>
            </Grid>
            <Grid item>
                <Item className={"badge"}>
                    <BiotechIcon fontSize={"large"} htmlColor={"#f49025"} />
                    <h1 className={"swot"}>
                        analize <br /> laborator
                    </h1>
                </Item>
            </Grid>
            <Grid item>
                <Item className={"badge"}>
                    <VaccinesIcon fontSize={"large"} htmlColor={"#019c84"} />
                    <h1 className={"swot"}>
                        tratamente <br /> vaccinari
                    </h1>
                </Item>
            </Grid>
        </Grid>
    );
};

export default BadgeSlider;
