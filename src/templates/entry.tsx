import React from "react";
import { graphql, Link } from "gatsby";

interface EntryProps {
  data: {
    file: {
      name: string;
      childMarkdownRemark: {
        html: string;
        frontmatter: {
          category: string;
          name: string;
        };
      };
    };
  };
}

export default function EntryTemplate({ data }: EntryProps) {
  const { frontmatter, html } = data.file.childMarkdownRemark;

  return (
    <div>
      <Link to="/">Go back</Link>

      <h1>{frontmatter.name}</h1>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

export const entryQuery = graphql`
  query ($slug: String!) {
    file(name: { eq: $slug }) {
      name
      childMarkdownRemark {
        html
        frontmatter {
          category
          name
        }
      }
    }
  }
`;
