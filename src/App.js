import Collapsible from 'react-collapsible';
import PetsIcon from '@mui/icons-material/Pets';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import BiotechIcon from '@mui/icons-material/Biotech';
import MasksIcon from '@mui/icons-material/Masks';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import './App.css';
import {Container} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import logo from './static/logos/logo.png';
import logoSmall from './static/logos/logo-small.png';
import logoInverted from './static/logos/logo-inverted.png';
import logoInvertedSmall from './static/logos/logo-small-inverted.png';
import bannerDesktop from './static/banners/banner_desktop.jpg';
import bannerMobile from './static/banners/banner_mobil.jpg';
import Header from "./Header";
function createData(
    name: string,
    price: number
) {
    return {name, price};
}

const sections = [
    'Pachete',
    'Consultatii'
]

const rows = [
    {
        "Pachete": [
            createData('Pachet pisici rasa comuna 1 (carnet, vaccin polivalent, deparazitare interna si externa)', 140),
            createData('Pachet pisici rasa comuna 2 (carnet, vaccin polivalent+rabic, deparazitare interna si externa)', 155)
        ],
        'Consultatii': [
            createData('Consultatie generala', 50),
            createData('Consultatie generala + analize de laborator', 80),
            createData('Consultatie generala + analize de laborator + vaccin rabic', 100)
        ],
        'Consultatii2': [
            createData('Consultatie generala', 50),
            createData('Consultatie generala + analize de laborator', 80),
            createData('Consultatie generala + analize de laborator + vaccin rabic', 100)
        ],
        'Consultatii3': [
            createData('Consultatie generala', 50),
            createData('Consultatie generala + analize de laborator', 80),
            createData('Consultatie generala + analize de laborator + vaccin rabic', 100)
        ],
        'Consultatii4': [
            createData('Consultatie generala', 50),
            createData('Consultatie generala + analize de laborator', 80),
            createData('Consultatie generala + analize de laborator + vaccin rabic', 100)
        ]
    }
];

const Servicii = () => (

    <Grid container spacing={0} justifyContent="space-evenly" className={"badges"}>
        <Grid item>
            <Item className={"badge"}><PetsIcon fontSize={"large"} htmlColor={"#499fe1ff"}/><h1 className={"swot"}>cabinet <br/>veterinar</h1></Item>
        </Grid>
        <Grid item>
            <Item className={"badge"}><MasksIcon fontSize={"large"} htmlColor={"#4824bcff"}/> <h1 className={"swot"}>chirurgie <br/>veterinara</h1></Item>
        </Grid>
        <Grid item>
            <Item className={"badge"}><ContentCutIcon fontSize={"large"} htmlColor={"#eb5160ff"}/> <h1 className={"swot"}>frizerie<br/> canina</h1></Item>
        </Grid>
        <Grid item>
            <Item className={"badge"}><BiotechIcon fontSize={"large"} htmlColor={"#f49025"}/> <h1 className={"swot"}>analize <br/> laborator</h1></Item>
        </Grid>
        <Grid item>
            <Item className={"badge"}><VaccinesIcon fontSize={"large"} htmlColor={"#019c84"}/><h1 className={"swot"}>tratamente <br/> vaccinari</h1></Item>
        </Grid>
    </Grid>
);
const Acasa = () => (
    <div className="acasa" itemID={'acasa'} id={'acasa'}>
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
    <div className="preturi" itemID={'preturi'} id="preturi" style={{marginBottom: 30}}>
        {sections.map((section) => (
            <Collapsible trigger={section} key={section}>
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableBody>
                            {rows[0][section].map((row) => (
                                <TableRow key={row.name} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.price} lei</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Collapsible>
        ))}
    </div>

);
const Contact = () => (
    <div className="contact" itemID={'contact'}>
        <p>În pet-shop-ul nostru, puteți găsi o gamă largă de produse pentru animale de companie, inclusiv alimente de înaltă calitate, jucării și accesorii pentru animale de companie. De asemenea,
            suntem pregătiți să vă oferim sfaturi și recomandări pentru alegerea celor mai bune produse pentru animalele dumneavoastră de companie.</p>

        <p>La cabinetul nostru veterinar din Berceni, suntem dedicați să oferim cele mai bune servicii pentru animalele de companie și proprietarii acestora. Pentru programări sau mai multe informații
            despre serviciile noastre, vă rugăm să ne contactați.</p>
        <iframe title={"map"}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17417.100074996753!2d26.17932236683499!3d44.31123488807131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ae03abc6d0b3df%3A0xc25d96fdd9420f03!2sRujanVet!5e1!3m2!1sen!2sro!4v1682455143654!5m2!1sen!2sro"
            width="100%" height="600" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
);
const Separator = () => (
    <div className="separator">
        <div className="separator-line"/>
        <div className="separator-text">🐾</div>
        <div className="separator-line"/>
    </div>
);


function App() {
    return (
        <div className="RujanVet">

            <Header logo={logo} logoInverted={logoInverted} logoSmall={logoSmall} logoInvertedSmall={logoInvertedSmall}/>

            <picture className={"banner"}>
                <source srcSet={bannerMobile} media="(orientation: portrait)"/>
                <source srcSet={bannerDesktop} media="(orientation: landscape)"/>
                <img src={bannerDesktop} alt="imagine reprezentativa cu banner"/>
            </picture>

            <Container maxWidth="lg">
                <Servicii/>
                <Acasa/>
                <Separator/>
                <Preturi/>
                <Separator/>
                <Contact/>
            </Container>
        </div>
    );
}

export default App;
