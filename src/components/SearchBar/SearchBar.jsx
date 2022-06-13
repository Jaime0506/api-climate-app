import { Autocomplete, TextField } from "@mui/material"
import { useState } from "react"
import { countries } from "../../data/countries"

import ResultSearch from "./ResultSearch"

import './index.css'

const SearchBar = () => {
    
    const [valueCountry, setValueCountry] = useState('')

    return (
        <>
            <div className={`${ !valueCountry && 'flex' }`}>
                <Autocomplete
                    onChange={(e, newValue) => setValueCountry(newValue)}
                    disablePortal
                    id="combo-box-demo"
                    options={countries}
                    sx={{ width: 500 }}
                    renderInput={(params) => <TextField {...params} label="Nombre de pais" />}
                />
            </div>

            { valueCountry && <ResultSearch query={valueCountry.label}/>}
        </>
        
    )
}

export default SearchBar