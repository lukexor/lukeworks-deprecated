import React from "react";
import styled from "styled-components";

interface Props {
  dates: string;
  duration?: string;
}

const Dates = ({ dates, duration }: Props) => {
  return (
    <DatesSection>
      {dates}{" "}
      {duration ? (
        <>
          {String.fromCharCode(183)} {duration}
        </>
      ) : null}
    </DatesSection>
  );
};

const DatesSection = styled.section`
  clear: both;
  color: #666;
  font-size: 0.85em;
`;

export default Dates;
