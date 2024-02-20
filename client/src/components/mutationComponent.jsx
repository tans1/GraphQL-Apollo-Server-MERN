import React from "react";
import { useMutation } from "@apollo/client";

import { DELETE_BOOK, CREATE_BOOK } from "../graphQL/mutations";

export default function MutationComponent() {
  const [deleteBook, { error }] = useMutation(DELETE_BOOK);

  //   Create A book
//   const [createBook, { error }] = useMutation(CREATE_BOOK);

//   const handleCreate = () => {
//     createBook({
//       variables: {
//         book: {
//           title: "Test",
//           author: "Tofik",
//           name: "Test",
//           price: 100
//         }
//       }
//     })
//   };

  const handleDelete = () => {
    deleteBook({
      variables: { name: "To Kill a Mockingbird" }
    });
  };
  if (error) return <p>Error : {error.message}</p>;

  return <button onClick={handleDelete}>Delete a book </button>;
}
