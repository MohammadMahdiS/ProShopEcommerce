import React, {useState, useEffect} from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Rating from './Rating'
import axios from 'axios'
import config from '../config'

function Product({product}) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    
    async function fetchProducts() {
      const {data} = axios.get(`${config.apiUrl}${config.apiProducts}`)
      setProducts(data)
    }

    fetchProducts()

  }, [])

  return (
    <Card className="my-3 p-3 rounded">
      {/* Link to the product details page */}
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" /> {/* Fixed Card.Img */}
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`} className="text-decoration-none">
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div" className="my-3">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`} // Fixed property name to match product object
            color={'#f8e825'}
          />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>

        {/* Display product description if available */}
        {product.description && (
          <Card.Text as="p">
            {product.description}
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  )
}

export default Product