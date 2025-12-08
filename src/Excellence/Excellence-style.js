// 

import styled from "styled-components";

export const ExcellenceStyle = styled.div`
  width: 100%;
  padding: 80px 0;
  text-align: center;

  h1 {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 40px;
  }

  .cards {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
  }

  .card {
    position: relative;
    width: 230px;
    height: 200px;
  }

  .card__content {
    position: relative;
    z-index: 2;
    height: 100%;
    background: #ffffff;
    border-radius: 18px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }

  .card__icon {
    font-size: 26px;
    margin-bottom: 8px;
  }

  .card__number {
    font-size: 32px;
    font-weight: 700;
  }

  .card__text {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .card__bottom {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 60px;
    border-radius: 18px;
    z-index: 1;
  }

  .card--green .card__bottom {
    background: #00c4b3;
  }

  .card--blue .card__bottom {
    background: #00a8ff;
  }

  .card--yellow .card__bottom {
    background: #ffb341;
  }

  .card--red .card__bottom {
    background: #ff5459;
  }
`;
