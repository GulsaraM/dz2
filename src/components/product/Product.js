import React from 'react';

function Product({productOne}) {
    return (
        <ul>
            <li>name: {productOne.name}</li>
            <li>price: {productOne.price}</li>
            <li>count: {productOne.count}</li>
        </ul>
    );
}

export default Product;