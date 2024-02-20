import React from "react";
import { useQuery } from "@apollo/client";

import { GET_BOOKS, GET_BOOK_BY_NAME } from "../graphQL/queries";

export default function QueryComponent() {
  // get ALL
  // const { loading, error, data } = useQuery(GET_BOOKS,{
  //   // pollInterval: 500,
  // });

  const { loading, error, data } = useQuery(GET_BOOK_BY_NAME, {
    variables: { name: "To Kill a Mockingbird" }
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <h3>Title : {data?.book?.title}</h3>
      <h3>Author : {data?.book?.author}</h3>
      <br />
    </div>
  );
  

  // Display all
  
  // return data?.books?.map(({ id, author, title }) => (
  //   <div key={id}>
  //     <h3>Title : {title}</h3>
  //     <h3>Author : {author}</h3>
  //     <br />
  //   </div>
  // ));

}
