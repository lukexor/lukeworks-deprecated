import styled, { css, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #eee;
    color: #444;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    font-size: 95%;
    height: 29.7cm;
    margin: 0;
    padding: 10px 40px;
    position: relative;
    width: 21cm;

    @media print {
      background: #fff !important;
    }

    @page {
      padding: 0;
      margin: 1.0cm 0.5cm 1.5cm 0.5cm;
      size: A4;
    }
  }

  .clear {
    clear: both;
  }

  ul {
    padding-left: 1em;
  }
`;

const baseHStyle = css`
  color: #003d73;
  font-family: "Georgia, Palatino, serif";
`;

const H1 = styled.h1`
  ${baseHStyle}
`;

const H2 = styled.h2`
  ${baseHStyle}
`;

const H3 = styled.h3`
  ${baseHStyle}
  border-bottom: 2px solid #ccc;
  font-size: 1.5em;
  margin: 25px 0 10px 0;
  padding-bottom: 5px;
`;

const H4 = styled.h4`
  ${baseHStyle}
  color: #333;
  font-size: 1.2em;
  font-weight: bold;
  margin: 15px 0 5px 0;
  padding: 0;
`;

const H5 = styled.h5`
  ${baseHStyle}
  color: #333;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  font-size: 0.9em;
  font-style: italic;
  font-weight: normal;
  margin: 0 0 5px 0;
  padding: 0;
`;

const H6 = styled.h6`
  ${baseHStyle}
`;

const A = styled.a`
  color: #444;
  text-decoration: none;
  &:visited {
    color: #444;
    text-decoration: none;
  }
  &:hover {
    color: #00f;
    text-decoration: underline;
  }
`;

const IconTitle = styled.section`
  display: flex;

  h4 {
    font-size: 1.5em;
    margin: auto 0px;
  }
`;

export { GlobalStyle, H1, H2, H3, H4, H5, H6, A, IconTitle };
