import {Card} from 'react-bootstrap';
const StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
  }
  StoreItem({ id, name, price, imgUrl }) {
    return (
        <Card className="h-100">
          <Card.Img
            variant="top"
            src={imgUrl}
            height="200px"
            style={{ objectFit: "cover" }}
          />
          
        </Card>
    )
    }
    export default StoreItem;