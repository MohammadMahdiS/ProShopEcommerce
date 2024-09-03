import React, {useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product'
import { fetchProducts } from '../slices/ProductSlice';

function Home() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  return (
    <div>
        <h1>Latest Products</h1>
        <Row >
            {products.slice(0, 4).map(product => (     // Show only a few featured products
                <Col key={product._id} sm={13} md={6} lg={4} xl={3}>
                <Product product={product} />
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default Home