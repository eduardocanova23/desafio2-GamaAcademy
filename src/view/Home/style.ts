import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: auto;

  .nav{
    display: flex;
    align-items: center;
    justify-content: space-between;

    .cart{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .main {
    width: 90%;
    height: 90%;
    background-color: #F8D5E1;
    margin: 50px auto;
    border-radius: 15px;
    box-shadow: 10px 5px 5px #21222b;

}

  .card-container {
    height: 100vh;
    width: 100%;
    background: #282a36;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .product-content{
      margin: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 10px;
      border: 1px solid black;
      box-shadow: 10px 5px 5px #21222b;
      //text-align: center;
      height: 300px;
      background:  #6272a4;
      border-radius: 12px;
      padding: 12px;
      font-family: 'Roboto', sans-serif;
      min-width: 430px;
      min-height: 330px;
    }

    .product-image {
    width: 100px;
    fill: #95141a;
    }

    .product-description {
      text-align: center;
      margin: 5px 2px;
    }

    .product-price {
      font-size: 18px;
      font-weight: 600;
    }

    .botao-add{
        background: #fff;
        margin: 5px 0;
        padding: 5px;
        border-radius: 10px;
        border: 1px solid #000;
    }

    .botao-add:hover{
        cursor: pointer;
        background-color: black ;
        color: #fff;
    }

    .footer {
        display: flex;
        width: 100%;
        height: 10%;
        align-items: center;
        justify-content: space-around;

    }
  }
`