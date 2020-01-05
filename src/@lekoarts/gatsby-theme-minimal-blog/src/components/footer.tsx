/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import useSiteMetadata from "../hooks/use-site-metadata";
import "./footer.css";

const Footer = () => {
  const { siteTitle } = useSiteMetadata();

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle} 🇺🇸
      </div>
      <div>
        <Styled.a
          aria-label="Link to the theme's GitHub repository"
          href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog"
          target="blank"
        >
          Minimal Theme
        </Styled.a>
        {` `}
        by
        {` `}
        <Styled.a
          aria-label="Link to the theme author's website"
          href="https://www.lekoarts.de/en"
          target="blank"
        >
          LekoArts
        </Styled.a>
        {` `}•{` `}
        <Styled.a
          aria-label="Link to color pallatte"
          href="https://pigment.shapefactory.co/?a=EEEEE9&b=B85374"
          target="blank"
        >
          Colors
        </Styled.a>
      </div>
    </footer>
  );
};

export default Footer;
