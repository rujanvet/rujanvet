import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import './App.css';
import {Container, Link} from "@mui/material";
import logo from './static/logos/logo.webp';
import logoSmall from './static/logos/logo-small.webp';
import logoInverted from './static/logos/logo-inverted.webp';
import logoInvertedSmall from './static/logos/logo-small-inverted.webp';
import Header from "./Header";
import {Info, LocalHospital, Phone, PunchClock} from "@mui/icons-material";
import GoogleReviews from "./GoogleReviews";
import Tarife from "./Tarife";
import BadgeSlider from "./BadgeSlider";

const Footer = () => (
    <footer className="footer">
        <div>
            <Grid container alignItems="flex-start" justifyContent="center" gap="30px" padding="15px">
                <Grid xs={12} md={2} item>
                    <Item>
                        <h4><Phone fontSize="large"/> Telefon</h4>
                        <Link href="tel:0723395545">0723 395 545</Link>
                        <Link href="tel:0723198951">0723 198 951</Link>

                    </Item>
                </Grid>
                <Grid xs={12} md={2} item>
                    <Item>
                        <h4><LocalHospital fontSize="large"/> Adresa</h4>
                        <p>
                            Bulevardul 1 Mai 309
                            Berceni 077020
                            România
                        </p>
                    </Item>
                </Grid>
                <Grid xs={12} md={2} item>
                    <Item>
                        <h4><PunchClock fontSize="large"/> Program</h4>
                        <p>Luni-Vineri: &nbsp;09:30–18:00</p>
                        <p>Sâmbata:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09:30–18:00</p>
                        <p>Duminica:&nbsp;&nbsp; &nbsp;11:00–14:00</p>
                    </Item>
                </Grid>
                <Grid xs={12} md={2} item>
                    <Item>
                        <h4><Info fontSize="large"/> Informatii</h4>
                        <p>RujanVet SRL</p>
                        <p>Cod Fiscal: 44289629</p>
                        <p>J40/8711/2021</p>

                    </Item>
                </Grid>
            </Grid>
        </div>
        <div>
            <Grid container alignItems="center" justifyContent="center" gap="30px" padding="15px" maxWidth="lg" style={{margin: "0 auto",fontSize:"12px"}}>
                <Grid item>
                    <Item>
                        <span>© {new Date().getFullYear()} RujanVet SRL. Toate drepturile rezervate. </span>
                    </Item>
                </Grid>
                <Grid item className={'footer-separator'}>
                    <Item>
                        <div className="separator-text" style={{fontSize:"48px"}}>🐾</div>
                    </Item>
                </Grid>
                <Grid item>
                    <Item>
                       <span>Site dezvoltat de Patrocle si Bucur.</span>
                    </Item>
                </Grid>
            </Grid>
        </div>
    </footer>
)
const Acasa = () => (
    <div className="acasa" itemID={'acasa'}>
        <h1>Dacă sunteți în căutarea unui cabinet veterinar de încredere în Berceni, suntem aici să vă ajutăm!</h1>
        <p>La cabinetul nostru veterinar, oferim o gamă largă de <strong>servicii medicale pentru
            animalele de companie</strong>, inclusiv îngrijire preventivă, intervenții medicale complexe, cosmetica și farmacie veterinară. Cu o echipă de medici veterinari cu experiență și un
            personal
            dedicat,
            suntem aici pentru a vă oferi cele mai bune servicii pentru animalele dumneavoastră iubite.
            De asemenea, avem un pet-shop unde puteți găsi o gamă variată de produse pentru animalele de
            companie.</p>
        <br/>
        <h2>Contactați-ne astăzi pentru a programa o vizită la clinica noastra!</h2>
    </div>
);
const Preturi = () => (
    <div className="preturi" itemID={'preturi'} id="tarife" style={{marginBottom: 30}}>
        <h3 className="title">Servicii</h3>
        <Tarife/>
    </div>

);
const Contact = () => (
    <div className="contact" itemID={'contact'} id='contact'>
        <h3 className="title">Contact</h3>
        <p>În pet-shop-ul nostru, puteți găsi o gamă largă de produse pentru animale de companie, inclusiv alimente de înaltă calitate, jucării și accesorii pentru animale de companie. De asemenea,
            suntem pregătiți să vă oferim sfaturi și recomandări pentru alegerea celor mai bune produse pentru animalele dumneavoastră de companie.</p>

        <p>La cabinetul nostru veterinar din Berceni, suntem dedicați să oferim cele mai bune servicii pentru animalele de companie și proprietarii acestora. Pentru programări sau mai multe informații
            despre serviciile noastre, vă rugăm să ne contactați.</p>
        <iframe title={"map"}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1427.6573880343024!2d26.189571!3d44.303479!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ae03abc6d0b3df%3A0xc25d96fdd9420f03!2sRujanVet!5e0!3m2!1sen!2sro!4v1682768167338!5m2!1sen!2sro"
                width="100%" height="600" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
);
const Separator = () => (
    <div className="separator">
        <div className="separator-line"/>
        <div className="separator-text" style={{fontSize:"24px"}}>🐾</div>
        <div className="separator-line"/>
    </div>
);


function App() {
    return (
        <div className="RujanVet">

            <Header logo={logo} logoInverted={logoInverted} logoSmall={logoSmall} logoInvertedSmall={logoInvertedSmall}/>

            <picture className={"banner"}>
                <source srcSet={`${process.env.PUBLIC_URL}/images/img_mobil.webp`} media="(orientation: portrait)"/>
                <source srcSet={`${process.env.PUBLIC_URL}/images/img_desktop.webp`} media="(orientation: landscape)"/>
                <img width="1903px" height="595px" src={`${process.env.PUBLIC_URL}/images/img_desktop.webp`} alt="imagine reprezentativa cu banner"/>
            </picture>

            <Container maxWidth="lg">
                <section>
                    <BadgeSlider/>
                </section>
                <Separator/>
                <section>
                    <Acasa/>
                </section>
                <Separator/>
                <section>
                    <GoogleReviews placeId={"ChIJ37PQxqsDrkARAw9C2f2WXcI"} apiKey={"AIzaSyBnE895PwMd-ufYsM4-8d92OtqtmrLE8GI"}/>
                </section>
                <Separator/>
            </Container>
            <section className={"tarife"}>
                <Container maxWidth="lg">
                    <Preturi/>
                </Container>
            </section>
            <Container maxWidth="lg" className={"contact"}>
                <Separator/>
                <section>
                    <Contact/>
                </section>
                <Separator/>
            </Container>

            <section>
                <Footer/>
            </section>
        </div>
    );
}

export default App;
