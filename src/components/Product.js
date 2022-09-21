import React from "react";


function Product({name, imagelink, altimage, title, price}) {
    return (
            <article>
        <span>{name}</span>
            <img src={imagelink} alt={altimage}/>
            <p>{title}</p>
            <h4>€{price},-</h4>
            </article>
    )
}

export default Product;