import React from "react";

import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Personal Portfolio Of <br />
          Karolis Šidlauskas
        </SectionTitle>
        <SectionText>
          I’m a software developer with the MERN Full-Stack development knowledge.
          <br />
          My motto - <span style={{ fontWeight: "bold" }}>"Bring value!"</span> I have a strong desire to learn and create -{" "}
          <span style={{ fontWeight: "bold" }}>"everyday people must build"</span>.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
