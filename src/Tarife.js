import React from 'react';
import {Accordion} from "@mui/material";
import {AccordionSummary} from "@mui/material";
import {AccordionDetails} from "@mui/material";
import {Typography} from "@mui/material";
import {TableContainer} from "@mui/material";
import {Table} from "@mui/material";
import {TableHead} from "@mui/material";
import {TableRow} from "@mui/material";
import {TableCell} from "@mui/material";
import {TableBody} from "@mui/material";
import {ExpandMore as ExpandMoreIcon} from "@mui/icons-material";





export default function Tarife() {
    const sections = {
        'Servicii': {
            'Consultatie generala': 30,
            'Consultatie de specialitate': 70,
            'Taiat unghii':15,
            'Vidare glande perianale':25,
            'Toaletare auriculara':25,
            'Examinare lampa Wood':40,
            'Sondaj uretral (+pretul sondei)':50,
            'Toaletare locala':25,
            'Bandaj simplu':25,
        },
        'Vaccinari si eliberari documente':{
            'Nobivac Parvo-C':70,
            'Nobivac DHPPi +L':80,
            'Nobivac DHPPi +RL':150,
            'Nobivac Rabies':180,
            'Canvac DHPPi +L':60,
            'Biocan Rabies':50,
            'Vaccin pisica PCH':80,
            'Vaccin PCHR':90,
            'Microcipare':90,
            'Inregistrare RECS + eliberare document':30,
            'Carnet de sanatate inseriat':20,
            'Pasaport':200
        },
        'Examene paraclinice':{
            'Test Dirofilaria':150,
            'Teste rapide boli infectioase (CPV, CDV, FeLV, FIV)':'90-120',
        },
        'Stomatologie':{
            'Detartraj pisica':200,
            'Detartraj caine < 25kg':250,
            'Extractie dentara (+ costul anesteziei)':50,
        },
        'Chirurgie':{
            'Castrare mascul pisica':200,
            'Sterilizare femela pisica':250,
            'Castrare mascul caine < 25kg':300,
            'Sterilizare femela caine < 25kg':400,
            'Castrare mascul caine > 25kg':'350-500',
            'Sterilizare femela caine > 25kg':'450-600',
            'Castrare mascul iepure':250,
            'Sterilizare femela iepure':350,
            'Cezariana':'400-600',
            'Ablatie tumori (in functie de dimensiunea si localizarea tumorii)':'250-700',
            'Masterectomie':'350',
            'Enterotomie':'700',
            'Splenectomie':'650',
            'Tarsorafie/blefarorafie':'300',
            'Enucleere glob ocular':'280',
            'Infundarea glandei Harder (Cherry eye)':'500',
            'Remediere chirurgicala othematom':'350',
            'Analize de sange - biochimie - prechirurgicala':'120',
        },
        'Cosmetica':{
            "Pachet tuns caine < 10kg": 120,
            "Pachet tuns caine 10-25kg": 140,
            "Pachet tuns caine > 25kg": 'de la 160',
            "Pachet tuns pisica": 120,
        }
    }
    return (
        <div>
            {Object.keys(sections).map((section) => (
                <Accordion key={section}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} id={`${section}-header`}>
                        <Typography variant='h4'>{section}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TableContainer>
                            <Table>
                                <TableBody>
                                    {Object.entries(sections[section]).map(([service, price]) => (
                                        <TableRow key={service}>
                                            <TableCell component="th" scope="row"><Typography variant="strong">{service}</Typography></TableCell>
                                            <TableCell align="right">{price} lei</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}
