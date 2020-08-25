import React from "react";
import styled from "@emotion/styled";

function Location() {
  const Container = styled.div`
    text-align: center;
  `;
  const City = styled.h1`
    font-family: "Merriweather", serif;
    font-size: 1.6rem;
  `;

  const Country = styled.h3`
    font-family: "Fira Sans", sans-serif;
    font-size: 1.1rem;
  `;
  return (
    <Container>
      <City>Lagos</City>
      <Country>Nigeria</Country>
    </Container>
  );
}

export default Location;
