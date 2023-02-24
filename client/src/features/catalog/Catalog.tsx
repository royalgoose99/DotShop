import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { IProduct } from "../../app/models/product";
import ProductsList from "./ProductList";

                        // props of interface Props
            // Destructuring the properties that we are interested in so that we dont have to infer its types
export default function Catalog(){
     const [products, setProducts] = useState<IProduct[]>([])

    // we pass into curly braces because were not returning anything from this
    useEffect(() => {
      // we have a callback function within useEffect
      fetch("http://localhost:5000/api/products")
        // fetch returns a promise
        .then(response => response.json())
        .then(data => setProducts(data))
    // after the callback we have a dependancy
    // this dependancy , [] means that this useEffect will only be called once
    // if we forget to add the dependancy, the useEffect will run everytime the pagte is re-rendered
     }, [])

   
    return (
      <>
        <ProductsList products={products}/>
      </>
    );
}