import React from 'react';
import './projects.scss';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProjectCard = ({ title, description, image, projectLink }) => {
  const handleProjectLinkClick = () => {
    window.open(projectLink, '_blank'); // Open the link in a new tab
  };

  return (
    <Card
      sx={{
        width: 345,
        height: 500,
        margin: '5rem 1rem 1rem 1rem',
        borderRadius: '10%',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-10px)',
        },
      }}
      className='project-card'
    >
      <CardMedia sx={{ height: 140 }} image={image} title='green iguana' />
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
          sx={{ color: 'black', fontWeight: 700 }}
        >
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          onClick={handleProjectLinkClick}
          sx={{ marginLeft: '5px' }}
        >
          Link to project
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
