import React from 'react';
import { Container, Button } from '@material-ui/core';

const HomePage = () => {
  return (
    <Container component="main" maxWidth="lg">
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </Container>
  );
};

export default HomePage;
