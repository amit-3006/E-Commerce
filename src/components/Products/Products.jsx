import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

// const products=[
//     { id: 1, name: 'Shoes', description: 'Running Shoes.', price: '$5', image: 'https://cdn.runrepeat.com/storage/gallery/buying_guide_primary/286/best-nike-running-shoes-for-women-15828209-380.jpg' },
//     { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'http://nopcommerce.testplant.com/content/images/thumbs/0000024_apple-macbook-pro-13-inch_550.jpeg' },
// ];

const Products=({ products, onAddToCart })=>{
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justifyContent="center" spacing={4}>
                {products.map((product)=>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
    
}

export default Products;