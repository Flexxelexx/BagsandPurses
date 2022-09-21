import React from "react";


function Tiles({titel, text, imagelink, altimage}) {
    return (

        <section>
            <h2>{titel}</h2>
            <p>{text}</p>

            <img src={imagelink} alt={altimage}/>

        </section>


    )
}


export default Tiles;

