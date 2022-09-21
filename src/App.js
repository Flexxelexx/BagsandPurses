import React from 'react';
import './App.css';

import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import ourStory from "./assets/our_story.png"

import Button from "./components/Button";
import Product from "./components/Product";
import Tiles from "./components/Tiles";

function App() {

    return (
        <>
            <h1>Handbags & Purses</h1>

            <nav>
                <Button
                    text="to the collection"
                />

                <Button
                    text="shop all bags"
                />

                <Button
                    text="pre-orders"
                    disable={true}
                />

            </nav>

            <main>

                <Product
                    name={"Best seller"}
                    imagelink={bag1}
                    altimage={"tas1"}
                    title={"The Handy Bag"}
                    price={400}
                />

                <Product
                    name={"Best seller"}
                    imagelink={bag2}
                    altimage={"tas2"}
                    title={"The stylish bag"}
                    price={250}
                />

                <Product
                    name={"New collection"}
                    imagelink={bag3}
                    altimage={"tas3"}
                    title={"The simple bag"}
                    price={300}
                />

                <Product
                    name={"New collection"}
                    imagelink={bag4}
                    altimage={"tas4"}
                    title={"The trendy bag"}
                    price={150}
                />

            </main>

            <footer>
                <Tiles
                    titel={"The Brand"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis id impedit sed. Accusantium adipisci animi\n" +
                        "    aspernatur dignissimos dolores enim fugiat ipsam itaque laborum libero, maxime molestiae numquam, optio quibusdam\n" +
                        "    vero?"}
                />

                <Tiles
                    imagelink={brand}
                    altimage={"ourbrand"}
                />
                <Tiles
                    imagelink={ourStory}
                    altimage={"ourStory"}
                />

                <Tiles
                    titel={"Our Story"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis id impedit sed. Accusantium adipisci animi\n" +
                        "    aspernatur dignissimos dolores enim fugiat ipsam itaque laborum libero, maxime molestiae numquam, optio quibusdam\n" +
                        "    vero?"}
                />
            </footer>


        </>
    );
}

export default App;


