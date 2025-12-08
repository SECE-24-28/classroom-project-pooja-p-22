import styled from "styled-components";

export const TrustedByStyle = styled.div`
  text-align: center;
  padding: 2rem 0;

  h1 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 40px;
  }

  .cards {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .card {
    --shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    --icon-size: 90px;

    padding: 0.8rem;
    border-radius: 10px;
    background-color: white;
    position: relative;
    z-index: 2;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .content {
    position: relative;
    padding: 1rem;
    text-align: center;
    background-color: white;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    box-shadow: var(--shadow);

    width: 230px;
    height: 200px;
  }

  .separator {
    position: absolute;
    width: 100%;
    height: 50%;
    bottom: 0;
    left: 0;
    border-radius: 10px;
    z-index: -1;
  }

  /* Background colors for each card */
  .card:nth-child(1) .separator {
    background-color: #01c8c8;
  }
  .card:nth-child(2) .separator {
    background-color: #00b7ff;
  }
  .card:nth-child(3) .separator {
    background-color: #f5b041;
  }
  .card:nth-child(4) .separator {
    background-color: #ff4d4d;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icon-wrapper {
    position: absolute;
    top: 0;
    left: 50%;

    width: var(--icon-size);
    height: var(--icon-size);
    padding: 0.4rem;
    border-radius: 50%;
    box-shadow: var(--shadow);

    display: flex;
    align-items: center;
    justify-content: center;

    translate: -50% -50%;
    font-size: 32px;
  }

  .icon-wrapper.bottom {
    top: initial;
    bottom: 0;
    translate: -50% 50%;
  }

  /* Icon-wrapper background colors */
  .card:nth-child(1) .icon-wrapper {
    background-color: #01c8c8;
  }
  .card:nth-child(2) .icon-wrapper {
    background-color: #00b7ff;
  }
  .card:nth-child(3) .icon-wrapper {
    background-color: #f5b041;
  }
  .card:nth-child(4) .icon-wrapper {
    background-color: #ff4d4d;
  }

  /* Inner icon circle */
  .icon {
    width: 70px;
    height: 70px;
    background-color: white;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 28px;
  }

  /* Icon colors */
  .card:nth-child(1) .icon {
    color: #01c8c8;
  }
  .card:nth-child(2) .icon {
    color: #00b7ff;
  }
  .card:nth-child(3) .icon {
    color: #f5b041;
  }
  .card:nth-child(4) .icon {
    color: #ff4d4d;
  }

  .value {
    font-size: 48px;
    font-weight: 700;
    color: #888;
    margin-bottom: 8px;
  }

  .label {
    font-size: 16px;
    font-weight: 600;
    color: #999;
    letter-spacing: 1px;
  }
`;
