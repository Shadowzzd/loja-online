import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    max-width: 100%;
    padding: 8px;
  }
`;

const ProductsGrid = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
  };
`;

const ProductList = ({onAddToCart}) => {
    const[products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/products')
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.error(err));
       }, []);
    
    
       return (
        <Container>
          <h2>Produtos</h2>
          <ProductsGrid>
            {products.map(product => (
              <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </ProductsGrid>
        </Container>
      );
    };


    export default ProductList;


