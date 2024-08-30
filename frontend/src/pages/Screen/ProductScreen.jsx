import React from 'react'
import {useParams, Link} from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import Rating from '../../components/Rating'
import Products from '../../products'

function ProductScreen( {match} ) {
    const { id } = useParams();
    const product = Products.find((p) => p._id === id);
    
    if (!product) {
        return <div>Product not found</div>;
      }
    
    return (
    <div>
    
    <div>
        <Link to="/" className="btn btn-light my-3">Go Back</Link>
        <Row>

        <Col md={6}>
        <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={3}>
        <ListGroup variant="flush">
            <ListGroup.Item>
                <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
                <Rating value={product.rating} text={`${product.numReviews} rating`} color={'#f8e825'} />
            </ListGroup.Item>
            <ListGroup.Item>
                Price: {product.price}
            </ListGroup.Item>
            <ListGroup.Item>
                Description: {product.description}
            </ListGroup.Item>
        </ListGroup>
        </Col>

        <Col md={3}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Col>
                            Price: 
                        </Col>
                        <Col>
                            <strong>
                                ${product.price}
                            </strong>
                        </Col>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Col>
                            Status: 
                        </Col>
                        <Col>
                            <strong>
                                {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                            </strong>
                        </Col>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button className="btn-block" disabled={product.countInStock === 0} type="button">Add To Cart</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
    </div>
    
    </div>
  )
}

export default ProductScreen