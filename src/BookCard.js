import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BookCard(props) {
   let title = props.title;
   let author = props.author;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {author}
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  );
}

export default BookCard;