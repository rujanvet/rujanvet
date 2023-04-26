import React, {useEffect, useState} from 'react';
import {Container} from "@mui/material";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";

const HeaderMenu = (logos) => {
    const [headerData, currentData] = useState({"logo": (window.innerWidth > 768) ? logos.logoInverted : logos.logoInvertedSmall, "class": "header"});
    const handleClickScroll = (data) => {
        debugger;
        const element = document.getElementById(data.target.dataset.section);
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            var headerOffset = 115;
            var elementPosition = element.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };


    const handleScroll = () => {
        if (window.pageYOffset >= 115) {
            currentData({"logo": (window.innerWidth > 768) ? logos.logo : logos.logoSmall, "class": "header header-scrolled"});
        } else {
            currentData({"logo": (window.innerWidth > 768) ? logos.logoInverted : logos.logoInvertedSmall, "class": "header"});
        }
    }

    React.useEffect(() => {
        window.onscroll = () => handleScroll(currentData);
        window.onresize = () => handleScroll(currentData);
    }, [headerData]); // IMPORTANT, This will cause react to update depending on change of this value

    return (
        <header className={headerData.class} id="header">
            <Container maxWidth="lg">
                <Grid container spacing={0} justifyContent="center" alignItems="center">
                    <Grid item xs={4}>
                        <Item>
                            <img src={headerData.logo} alt="logo" style={{maxHeight: 80}} className={"logo"}/>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container
                              direction="row"
                              justifyContent="center"
                              alignItems="center" spacing={3}>
                            <Grid item>
                                <Item><span  className="menuItem" data-section="acasa" onClick={handleClickScroll}>Acasa</span></Item>
                            </Grid>
                            <Grid item>
                                <Item><span data-section="preturi" className="menuItem" onClick={handleClickScroll}>Preturi</span></Item>
                            </Grid>
                            <Grid item>
                                <Item><span  data-section="contact" className="menuItem" onClick={handleClickScroll}>Contact</span></Item>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Item className={"contacts"}>
                            <a href="tel:0722333444" className="link link-phone">0722333444</a>
                            <span className="link link-schedule">Luni - Vineri: 09:00 - 17:00</span>
                        </Item>
                    </Grid>
                </Grid>
            </Container>
        </header>

    );
}

export default HeaderMenu;