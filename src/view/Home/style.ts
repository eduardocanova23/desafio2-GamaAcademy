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
  section {
    height: 100vh;
    width: 100%;
    background: #282a36;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .product-content{
      display: grid;
      text-align: center;
      height: 300px;
      background:  #6272a4;
      border-radius: 12px;
      padding: 12px;
    }
    .botao-add{
        background: #fff;
    }

    .botao-add:hover{
        cursor: pointer;
        background-color: black ;
        color: #fff;
    }
  }
`