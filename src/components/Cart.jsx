import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, Typography, Box } from '@mui/material';

export default function Cart() {
  const cart = useSelector((state) => state.cart.items);

  const cartList = cart.map((cartItem) => (
    <Typography key={cartItem.id} variant="body2">
      {cartItem.title} - ${cartItem.price} (x{cartItem.quantity})
    </Typography>
  ));

  const cartIsEmpty = cart.length === 0;
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, { price, quantity }) => sum + price * quantity,
    0,
  );

  if (cartIsEmpty) {
    return null;
  }

  return (
    <Card
      sx={{
        minWidth: 400,
        mt: 2,
      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontSize: 14,
          }}
          color="text.secondary"
        >
          Your Cart
        </Typography>
        <Box>
          {cartList}
          <Typography variant="h6">Total Price: ${totalPrice}</Typography>
          <Typography variant="body2">
            Total Quantity: {totalQuantity}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
