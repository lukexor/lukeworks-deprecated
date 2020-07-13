import React from "react";
import Ribbon from "./Ribbon";
import { A, H3, H4 } from "./Styles";
import { ResumeAddtlExperience } from "components/Resume";

interface Props {
  list: ResumeAddtlExperience[];
}

const Experience = ({ list }: Props) => {
  return (
    <section>
      <Ribbon />

      <H3>Technical Experience</H3>

      {list.map((item, i) => (
        <section key={i}>
          <H4>{item.title}</H4>
          <ul>
            {item.bullets.map((bullet, i) => (
              <li key={i}>
                <strong>
                  {bullet.title}
                  {bullet.dates ? ` (${bullet.dates})` : ""}.
                </strong>{" "}
                {bullet.desc} (<A href={bullet.website}>{bullet.website}</A>)
              </li>
            ))}
          </ul>
        </section>
      ))}
    </section>
  );
};

export default Experience;
