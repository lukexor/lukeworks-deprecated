import React from "react";
import Dates from "./Dates";
import Ribbon from "./Ribbon";
import Icon from "./Icon";
import { H3, H4, H5, IconTitle } from "./Styles";
import { ResumeExperience } from "../Resume";

interface Props {
  list: ResumeExperience[];
}

const Education = ({ list }: Props) => {
  return (
    <section>
      <Ribbon />
      <H3>Education</H3>

      {list.map((item, i) => (
        <section key={i}>
          <IconTitle>
            <Icon src={item.icon} alt={item.entity} />
            <H4>{item.title}</H4>
          </IconTitle>
          <H5 className="clear">
            {item.entity}, {item.location}
          </H5>
          <Dates dates={item.dates} />

          <ul>
            {item.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </section>
      ))}
    </section>
  );
};

export default Education;
