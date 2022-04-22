import React from "react";
import './SearchBar.css'
import { useState } from "react";

const SearchBar = () => {
    return (

        <div ClassName="container">

            <div className="inputBuscarPoke">
                <input type="text" placeholder="Buscar pokemon" />
            </div>
        </div>
    )
}

export default SearchBar;