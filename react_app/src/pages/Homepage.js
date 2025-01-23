import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const features = [
  'Paragraph Generation',
  'Text Summarisation',
  'ChatBot feature'
];

export const Homepage = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Welcome to Our AI WebApp
      </Typography>
      <Typography variant="h5" gutterBottom>
        Features:
      </Typography>
      <List>
        {features.map((feature, index) => (
          <ListItem key={index}>
            <ListItemText 
              primary={
                <Typography variant="body1" style={{ fontWeight: 'bold', color: '#3f51b5' }}>
                  {feature}
                </Typography>
              } 
            />
          </ListItem>
        ))}
      </List>
      <Typography variant="body1" gutterBottom>
        Please register and login using the options available at the top right.
      </Typography>
    </Container>
  );
};
