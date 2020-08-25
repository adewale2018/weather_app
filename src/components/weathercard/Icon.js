import React from "react";
import styled from "@emotion/styled";

import cloud from "./cloud.png";

function Icon() {
  const Icon = styled.div`
    text-align: center;
    img {
      width: 40%;
    }
  `;
  return (
    <Icon>
      <img src={cloud} className='Icon' alt='Weather Icon' />
    </Icon>
  );
}

export default Icon;
