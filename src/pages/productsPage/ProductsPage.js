import React from 'react';
import Product from "../../components/product/Product";
import ProductsList from "../../components/productsList/ProductsList";
import Products from "../../components/products/Products";


function ProductsPage(props) {
    const product = {
        name: "Apple",
        price: 15,
        count: 10
    }

    const products = ["Apple", "Orange", "Tomato", "Mango"]

    const productsObj = [
        {
            id: 1,
            name: "Laptop",
            price: 200
        },
        {
            id: 2,
            name: "Phone",
            price: 100
        },
    ]

    return (
        <>
            <Product productOne={product}/>
            <h1>---------------------------------</h1>
            <ProductsList productsArr={products}/>
            <h1>---------------------------------</h1>
            <Products productsList={productsObj}/>
        </>
    );
}

export default ProductsPage;