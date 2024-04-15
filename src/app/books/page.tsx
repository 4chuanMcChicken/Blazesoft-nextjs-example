"use client";
import React from "react";
import BookPage from "./BookPage";
import Providers from "@/app/books/Provider";

const Books = () => {
  return (
    <>
      <Providers>
        <BookPage></BookPage>
      </Providers>
    </>
  );
};

export default Books;
