import React, { useState, useEffect } from 'react';

import Cart from '../../assets/cart.png'

import Marca from '../../assets/marca.png'

import { Container } from './style';

import api from '../../services/api';

interface IProduct{
    id: number;
    photo: string;
    name: string;
    description: string;
    price: number;
}

interface Test {
    cart: IProduct[]
}

const Home: React.FC = () => {
  const [ data, setData ] = useState<IProduct[]>([]);
  const [ cart, setCart ] = useState<IProduct[]>([]);

  useEffect(() =>{
      api.get('').then(
          response => {
              setData(response.data)
          }
      )
  }, [])
  
  useEffect(() => {
      localStorage.setItem(`@cart`, JSON.stringify(cart));
  }, [cart]);

  const handleCart = (index: number) => {

    let product = data[index]
    setCart(cart => [...cart,product]);

    const productStore = JSON.stringify(data[index]);

    localStorage.setItem(`@Produto-${index}`, productStore)
  }

  return(
    <Container>
      <div className="nav">
        <div>
          <img src={Marca} alt="vtex" width="330px" height="auto" />
        </div>
        <div className="cart">
          <img src={Cart} alt="shopcart" width="50px" height="auto" />
          <span>( {cart.length} ) - Itens</span>
        </div>
      </div>
      <section>
        { data.map( (prod, index) => (
          <div className="product-content" key={prod.id}>
            <img src={prod.photo} alt="iphone" width="200" height="auto" />
            <h4>{prod.name}</h4>
            <span>{prod.description}</span>
            <h6>R$: {prod.price},00</h6>
            <button onClick={ () => handleCart(index)} className="botao-add"> Adicionar ao carrinho</button>
          </div>
        ))}
      </section>
    </Container>
  );
}

export default Home;