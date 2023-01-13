/* eslint-disable object-curly-newline */
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  ButtonGroup,
} from '@mui/material';
import { addToCart, removeFromCart } from '../features/cartSlice';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'Test Product 1',
    price: 10,
    quantity: 1,
  },
  {
    id: 'p2',
    title: 'Test Product 2',
    price: 20,
    quantity: 1,
  },
  {
    id: 'p3',
    title: 'Test Product 3',
    price: 30,
    quantity: 1,
  },
];

export default function Products() {
  const dispatch = useDispatch();
  const addProductToCart = (product) => {
    dispatch(addToCart(product));
  };
  const removeProductFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const productsList = DUMMY_PRODUCTS.map((product) => (
    <Box
      sx={{
        mb: 1,
        pb: 3,
        borderBottom: '1px solid #ccc',
        '&:last-child': {
          borderBottom: 'none',
          pb: 0,
        },
      }}
      key={product.id}
    >
      <Typography variant="body1">{product.title}</Typography>
      <Typography variant="body1">Price: ${product.price}</Typography>
      <ButtonGroup variant="contained" size="small" fullWidth>
        <Button onClick={() => removeProductFromCart(product)}>-</Button>
        <Button onClick={() => addProductToCart(product)}>+</Button>
      </ButtonGroup>
    </Box>
  ));
  return (
    <Card
      sx={{
        width: 400,
        mt: 1,
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            fontSize: 14,
          }}
          color="text.secondary"
        >
          Products list
        </Typography>
        {productsList}
      </CardContent>
    </Card>
  );
}
