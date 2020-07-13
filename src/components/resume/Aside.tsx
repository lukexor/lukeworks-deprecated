import React from "react";
import styled from "styled-components";
import { H3, H4, A } from "./Styles";

interface Props {
  addr1: string;
  addr2: string;
  phone: string;
  email: string;
  website: string;
  langAndTech: string[];
}

const Aside = ({ addr1, addr2, phone, email, website, langAndTech }: Props) => {
  return (
    <StyledAside>
      <section>
        <H3>Personal Info</H3>

        <H4>Address</H4>
        <StyledP>
          {addr1}
          <br />
          {addr2}
        </StyledP>

        <H4>Phone</H4>
        <StyledP>{phone}</StyledP>

        <H4>Email</H4>
        <StyledP>
          <A href={`mailto:${email}`}>{email}</A>
        </StyledP>

        <H4>Website</H4>
        <StyledP>
          <A href={website}>{website}</A>
        </StyledP>
      </section>

      <section>
        <H3>Languages & Technologies</H3>

        <ul>
          {langAndTech.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>
    </StyledAside>
  );
};

const StyledAside = styled.aside`
  float: left;
  clear: both;
  width: 30%;

  section {
    clear: both;
  }
`;

const StyledP = styled.p`
  margin: 5px 0 10px 0;
`;

export default Aside;
