import styled from 'styled-components';

export const TaskStyle = styled.div`
  width: 100%;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;   

  
  h1.element {
    color: navy;
    text-align: center;
  }
  
  form {
    margin-top: 20px;
  }
  
  label {
    display: block;
    margin: 10px 0 5px;
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  button {
    background: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .parent {
    display: flex;

    background-color: green;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 100vh;
    @media (max-width: 920px) {
      flex-direction: column;
    }
  }
  .square__child {
    width: 50px;
    height: 50px;
    background-color: yellow;
  }
  .square__rectangle {
    width: 100px;
    height: 100px;
    background-color: aqua;
    @media (max-width: 900px) {
      display: none;
    }
  }

  .banner {
    background-color: rgb(252, 41, 71);
    border-radius: 200px;
    max-width: 1400px;
    padding: 2rem;

  }

  .banner__title {
    color: white;
    font-size: 32px;
    font-weight: 600;
    text-align: center;
  }

  .banner__text {
    color: white;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
  }
`;
