import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
    query GETALLBOOKS {
      books {
        title
        author
        price
      }
    }
  `;

export const GET_BOOK_BY_NAME = gql`
  query GETBOOKBYNAME($name: String!) {
    book(name: $name) {
      title
      author
      price
    }
  }
`;