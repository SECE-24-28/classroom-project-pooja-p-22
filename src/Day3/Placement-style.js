import styled from "styled-components";

export const PlacementStyle = styled.div`
  width: 100%;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  .slide {
    max-width: 1280px;
    text-align: center;
  }

  .heading {
    font-weight: 600;
    font-size: 48px;
    text-align: center;
    font-family: "Work Sans", sans-serif;
  }

  .text {
    max-width: 900px;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.8;
    font-family: "Work Sans", sans-serif;
    text-align: center;
    color: rgb(86, 102, 131);
  }

  
  .content__row {
    width: 95%;
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }

  .sub__slide1,
  .sub__slide2 {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding:1rem;
    box-sizing: border-box;
    list-style-type: none;
    margin: 0;
    
  }


  .divider {
    width: 4px;
    background-color: #e0e0e0;
    height: auto;
  }

  .sub__heading1 {
    color: rgb(243, 176, 79);
    font-size: 32px;
    font-weight: 600;
    border-left: 4px solid rgb(243, 176, 79);
    padding-left: 0.5rem;
    font-family: "Work Sans", sans-serif;
  }

  .sub__heading2 {
    color: rgb(0, 189, 235);
    font-size: 28px;
    font-weight: 600;
    border-left: 4px solid rgb(0, 189, 235);
    padding-left: 0.5rem;
    font-family: "Work Sans", sans-serif;
  }

  .context1,
  .context2 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.8;
    font-family: "Work Sans", sans-serif;
    color: rgb(86, 102, 131);
  }


  @media (max-width: 768px) {
    .content__row {
      flex-direction: row;
      gap: 25px;
    }

    .sub__slide1,
    .sub__slide2 {
      width: 100%;
    }

    .divider {
      display: none;
    }
  }
    
    .capsule {
        
    width: 100%;
    max-width: 1100px;
    background: #ff2f46;
    text-align: center;
    border-radius: 200px;      
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 40px;
}
    .title {
        color: #ffffff;
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    .text1 {
        color: #ffffff;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.6;
        max-width: 700px;
    }
`;
