import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  maxWidth: 345,
  margin: 'auto',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
});

const StyledCardMedia = styled(CardMedia)({
  height: 140,
  objectFit: 'cover',
});

const CardContentWrapper = styled(CardContent)({
  flexGrow: 1,
});

const NewsCard = ({ title, imageUrl, description, category, onEdit }) => {
  return (
    <StyledCard>
      {imageUrl && (
        <StyledCardMedia component="img" image={imageUrl} alt={title} />
      )}
      <CardContentWrapper>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {category}
        </Typography>
      </CardContentWrapper>
      <CardActions>
        <Button size="small" onClick={onEdit}>
          Edit
        </Button>
      </CardActions>
    </StyledCard>
  );
};

export default NewsCard;
