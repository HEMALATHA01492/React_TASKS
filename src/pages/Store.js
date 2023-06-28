import React from 'react';
import { Row, Col} from 'react-bootstrap'
import StoreItem from "../data/items.json";
function Store(props) {
  return (
   <>
    <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {StoreItem.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
   </>
  )}


export default Store