import styled from "styled-components";

export const BoxStyle = styled.div`
  width: 90%;
  margin: auto;
  text-align: center;
  padding: 40px 0;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 40px;
  }

  .highlight {
    color: #ff3b57;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    justify-content: center;
    align-items: center;
  }

  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    border-radius: 20px;
    background: #f9f9f9;
    height: 160px;
  }

  /* Colors */
  .pink {
    background: #ffe1e5;
  }

  .blue {
    background: #dfeeff;
  }

  .green {
    background: #e6ffe9;
  }

  .yellow {
    background: #ffeccf;
  }

  .card h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    font-weight: 500;
  }

  .card p {
    font-size: 1.8rem;
    font-weight: 700;
  }

  .card img {
    width: 110px;
    height: auto;
  }
`;
