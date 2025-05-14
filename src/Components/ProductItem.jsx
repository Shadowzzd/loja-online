import styled from 'styled-components';


const ContainerCard = styled.div`
`;
const Card = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 10px;
  width: 200px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  max-height: 120%;

  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    max-width: 180px;
    padding: 10px;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    
    max-width: 100%;
    padding: 8px;
  }
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;
const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    height: 120px;
  }

  @media (max-width: 480px) {
    height: 100px;
  }
`;
const ProductName = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
const ProductPrice = styled.p`
  font-size: 1rem;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;


const ProductItem = ({ product, onAddToCart }) => {

  return (
    <ContainerCard>
    <Card>
      <ProductImage src={product.image} alt={product.name}/>      
      <ProductName>{product.name}</ProductName>
      <ProductPrice>Preço: R$ {product.price}</ProductPrice>
      <Button onClick={() => onAddToCart(product)}>Adicionar ao carrinho</Button>
    </Card>
    </ContainerCard>
  );
};


export default ProductItem;

