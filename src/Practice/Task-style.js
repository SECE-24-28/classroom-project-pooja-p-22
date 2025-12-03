import styled from 'styled-components';

export const TaskStyle = styled.div`
  // background-color: lightblue;
  // padding: 100px;
  // border-radius: 100px;
  // max-width: 500px;
  // margin: 20px auto;
  // font-family: Arial;

background-color: #f0f0f0ff;
padding: 10px;
border-radius: 10px;      /* big pill */
max-width: 1100px;         /* wider banner */
margin: 40px auto;         /* center horizontally */
font-family: Arial, sans-serif;
display: flex;
flex-direction: column;
align-items: center;       /* center horizontally */
justify-content: center;   /* center vertically */
text-align: center;        /* center text */

  
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
    width: 90%;
    max-width: 1100px;
    margin: 40px auto;
    background-color: #ff2445;
    color: #ffffff;
    padding: 35px 40px;
    border-radius: 999px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }

  .banner__title {
    font-size: 28px;
    font-weight: 700;
    margin: 0 0 12px 0;
  }

  .banner__text {
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
    max-width: 700px;
  }

  @media (max-width: 768px) {
    .banner {
      padding: 24px 20px;
      border-radius: 40px;
    }

    .banner__title {
      font-size: 22px;
    }

    .banner__text {
      font-size: 14px;
    }
  }
`;
