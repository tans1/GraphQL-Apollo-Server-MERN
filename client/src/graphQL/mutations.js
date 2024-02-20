import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
    mutation DELETE_BOOK($name : String!) {
      deleteBook(name : $name) {
        title
        author
        price
      }
    }
    mutation CREATE_BOOK($book : AddBookType!) {
      createBook(book : $book) {
        title
        author
        price
      }
    }
  `;


