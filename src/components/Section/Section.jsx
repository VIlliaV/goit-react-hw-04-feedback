import { SectionStyle } from "./Section.styled";

export const Section = ({ title, children }) => (
  <>
    <SectionStyle>{title}</SectionStyle>
    {children}
  </>
);
