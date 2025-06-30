import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material'; // Mejor práctica para textos en MUI

interface CardProps {
  title: string;
  text: string;
  img: string;
  altText: string;
}

const CardTemplate = ({ title, text, img, altText }: CardProps) => {
  return (
    <Card>
      <CardMedia component="img" height="140" image={img} alt={altText} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardTemplate;
