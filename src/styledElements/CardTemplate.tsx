import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

interface CardProps {
  title: string;
  text: string;
}

const CardTemplate = ({ title, text }: CardProps) => {
  return (
    <Card>
      <CardMedia component="img" alt="green iguana" height="140" image="/static/images/cards/contemplative-reptile.jpg" />
      <CardContent>
        <h5>{title}</h5>
        <p>{text}</p>
      </CardContent>
    </Card>
  );
};

export default CardTemplate;
