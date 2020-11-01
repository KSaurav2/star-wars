import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import './Home.css';

export default function Home() {
    const [searchText, setSearchText] = useState("");
    const [planets, setPlanets] = useState([]);

    const onSearchTextChange = (e) => {
        setSearchText(e.target.value);
        axios.get(`https://swapi.dev/api/planets/?search=${e.target.value}`)
            .then(response => {
                if (response.status === 200) {
                    setPlanets(response.data.results)
                }
                else {
                    setPlanets([])
                }
            })
            .catch(error => {
                setPlanets([])
            })
    }
    return (
        <div className="home">
            <Paper className="custom-paper">
                <TextField
                    id="outlined-search"
                    label="Search field"
                    type="search"
                    variant="outlined"
                    fullWidth
                    value={searchText}
                    onChange={onSearchTextChange}
                />
                {planets && <ul>
                    {planets.map(planet => {
                        return <li key={planet.name} style={{ fontSize: planet.population === 'unknown' ? 12 : parseInt(`1${planet.population.charAt(0)}`) }}>{planet.name}</li>
                    })}
                </ul>}
            </Paper>
        </div>
    )
}