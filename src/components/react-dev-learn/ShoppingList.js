import React from 'react'

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
]

function ShoppingList() {
    const items = products.map(product => {
        return (
            <li key={product.id} style={{color: product.isFruit ? 'magenta' : 'darkgreen'}}>
                {product.title}
            </li>
        )
    });

    return (
        <ul>{items}</ul>
    );
}

export default ShoppingList