import { useState } from 'react';
import styled from 'styled-components';

const CartContainer = styled.div`
  margin-top: 30px;
  border-top: 2px solid #ddd;
  padding-top: 20px;

  @media (max-width: 768px) {
    margin-top: 20px;
    padding-top: 15px;
  }

  @media (max-width: 480px) {
    margin-top: 15px;
    padding-top: 10px;
  }
`;

const CartTitle = styled.h2`
  font-size: 1.8rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    margin-right: 0;
  }
`;

const ItemDetails = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
`;

const ItemText = styled.span`
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const ModalItemText = styled(ItemText)`
  color: #000000;
`;

const RemoveButton = styled.button`
  padding: 5px 10px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background-color: #c0392b;
  }

  @media (max-width: 768px) {
    padding: 4px 8px;
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 3px 6px;
    font-size: 0.7rem;
  }
`;

const Total = styled.h3`
  margin-top: 20px;
  text-align: right;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ModalTotal = styled(Total)`
  color: #000000;
`;

const CheckoutButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #27ae60;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    max-width: 90%;
    padding: 10px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #000000;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const ModalItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
`;

const ConfirmButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;

  &:hover {
    background-color: #2980b9;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
`;

const Cart = ({ cartItems, onRemoveFromCart, getTotal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmPurchase = () => {
    alert('Compra confirmada! Seus produtos já chegaram.');
    setIsModalOpen(false);
    onRemoveFromCart([]);
  };

  return (
    <CartContainer>
      <CartTitle>Carrinho</CartTitle>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <CartItem key={item.id}>
                <ItemDetails>
                  <ProductImage src={item.image} alt={item.name} />
                  <ItemText>
                    {item.name} (x{item.quantity}) - R$ {(item.price * item.quantity).toLocaleString('pt-BR')}
                  </ItemText>
                </ItemDetails>
                <RemoveButton
                  onClick={() => {
                    console.log('Removendo unidade de:', item.name);
                    onRemoveFromCart(item.id);
                  }}
                >
                  Remover Unidade
                </RemoveButton>
              </CartItem>
            ))}
          </ul>
          <Total>Total: R$ {getTotal().toLocaleString('pt-BR')}</Total>
          <CheckoutButton onClick={handleOpenModal}>Finalizar Compra</CheckoutButton>
        </>
      )}

      {isModalOpen && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>Resumo da Compra</ModalTitle>
              <CloseButton onClick={handleCloseModal}>×</CloseButton>
            </ModalHeader>
            {cartItems.map(item => (
              <ModalItem key={item.id}>
                <ItemDetails>
                  <ProductImage src={item.image} alt={item.name} />
                  <ModalItemText>{item.name} (x{item.quantity})</ModalItemText>
                </ItemDetails>
                <span style={{ color: '#000000' }}>
                  R$ {(item.price * item.quantity).toLocaleString('pt-BR')}
                </span>
              </ModalItem>
            ))}
            <ModalTotal>Total: R$ {getTotal().toLocaleString('pt-BR')}</ModalTotal>
            <ConfirmButton onClick={handleConfirmPurchase}>Confirmar Compra</ConfirmButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </CartContainer>
  );
};

export default Cart;