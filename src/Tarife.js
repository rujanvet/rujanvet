import React, {useEffect, useState} from 'react';
import {Accordion, AccordionSummary, AccordionDetails, Typography, TableContainer, Table, TableRow, TableCell, TableBody, CircularProgress} from '@mui/material';
import {ExpandMore as ExpandMoreIcon} from '@mui/icons-material';

export default function Tarife() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const cachedData = localStorage.getItem("clinicData");

                if (cachedData) {
                    const {data, timestamp} = JSON.parse(cachedData);
                    const now = new Date().getTime();
                    if (now - timestamp <= 86400000) {
                        setData(data);
                        return;
                    }
                }
                const response = await fetch(
                    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQHKa4JtNVRM8vBefAddWRiZWxakSdle3fvJVSKJdhRBW-GtPMtzhRyPQwXGVocnKmxFtz6y0rRNFS3/pub?gid=0&single=true&output=tsv"
                );
                const text = await response.text();
                const rows = text.split("\n").map((row) => row.split("\t"));
                const updatedAt = rows[0][1];
                // debugger;
                const rowsWithoutHeader = rows.slice(2);
                const formattedData = rowsWithoutHeader.map((row) => {
                    return {
                        Category: row[0],
                        Name: row[1],
                        Price: row[2],
                    };
                });
                const groupedData = formattedData.reduce((acc, curr) => {
                    if (!acc[curr.Category]) {
                        acc[curr.Category] = [];
                    }
                    acc[curr.Category].push(curr);
                    return acc;
                }, {});
                setData(groupedData);
                localStorage.setItem("clinicUpdatedAt", updatedAt)
                localStorage.setItem(
                    "clinicData",
                    JSON.stringify({data: groupedData, timestamp: new Date().getTime()})
                );
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();

    }, []);

    return (
        <div>
            {data ? (
                <>
                    {Object.entries(data).map(([category, services]) => (
                        <Accordion key={category}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                id={`${category}-header`}
                            >
                                <Typography variant="h4">{category}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <TableContainer>
                                    <Table>
                                        <TableBody>
                                            {services.map((service, index) => (
                                                <TableRow key={index}>
                                                    <TableCell component="th" scope="row">
                                                        <Typography variant="strong">{service.Name}</Typography>
                                                    </TableCell>
                                                    {/*<TableCell align="right">*/}
                                                    {/*    {(service.Price) ? service.Price + " lei": "Prețul se stabilește în funcție de caz"}*/}
                                                    {/*</TableCell>*/}
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </>
            ) : (
                <CircularProgress/>
            )}
            <Typography variant="caption">
                *Informatiile sunt actualizate la data de {localStorage.getItem('clinicUpdatedAt')}. Acestea pot varia în funcție de fiecare caz în parte. Vă rugăm să ne contactați pentru mai multe informații.
            </Typography>
        </div>
    );
}
