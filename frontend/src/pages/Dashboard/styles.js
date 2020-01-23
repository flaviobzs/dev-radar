import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  aside {
    width: 320px;
    background-color: #fff;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
    border-radius: 2px;
    padding: 30px 20px;
    margin-right: 30px;

    strong {
      font-size: 20px;
      text-align: center;
      display: block;
      color: #333;
    }
  }

  @media (max-width: 1000px) {
    aside {
      margin-right: 0;
      width: 100%;
    }
  }

  main {
    flex: 1; /* fazer com que o container main ocupe todo o espaço dele  */
    /* !!!!!!!!!!!!!!!!!!!!!!!!!! */

    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      list-style: none;
    }

    @media (max-width: 650px) {
      ul {
        grid-template-columns: 1fr;
      }
    }
  }

  @media (max-width: 1000px) {
    main {
      margin-top: 30px;
    }
  }
`;
