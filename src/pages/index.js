import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Navigation from "../components/Navigation/Navigation";
import Cover from "../components/Cover/Cover";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import favicon from "../static/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";

function HomePage({ data }) {
  const { edges: projectImgs } = data.projectImgs;
  const { title, description } = data.site.siteMetadata;
  return (
    <div>
      <Helmet
        title={title}
        meta={[
          {
            name: `description`,
            content: description,
          },
          {
            property: `og:title`,
            content: 'Sachin Jadhav',
          },
          {
            property: `og:description`,
            content: 'JavaScript Developer',
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: `og:image`,
            content: data.logoUrl.edges[0].node.publicURL
          },
          {
            property: `og:url`,
            content: `https://www.sachinjadhav.in`
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: 'Sachin Jadhav',
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: description,
          }
        ]}
      >
        <link rel="icon" type="/image/png" href={favicon} />
      </Helmet>
      <Cover coverImg={data.coverImg} />
      <div className="container-fluid main">
        <Navigation logoImg={data.logoImg} />
        <About profileImg={data.profileImg} />
        <Projects projectImgs={projectImgs} />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;

export const query = graphql`
  query allImgsQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    coverImg: imageSharp(original: { src: { regex: "/background/" } }) {
      fluid(maxWidth: 1200, toFormat: PNG) {
        ...GatsbyImageSharpFluid
      }
    }
    profileImg: imageSharp(original: { src: { regex: "/profile/" } }) {
      fluid(maxWidth: 250, maxHeight: 250) {
        ...GatsbyImageSharpFluid
      }
    }
    logoImg: imageSharp(original: { src: { regex: "/logo/" } }) {
      fluid(maxWidth: 124, maxHeight: 162) {
        ...GatsbyImageSharpFluid
      }
    }
    logoUrl: allFile(filter: { relativePath: { regex: "/logo/" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
    projectImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/projects/.*.PNG/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 320) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
