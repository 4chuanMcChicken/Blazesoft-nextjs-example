"use client";
import React from "react";
import Book from "./Book";
import { typeBook } from "@/types";
import AddBook from "./AddBook";
import "./page.css";
import { RootState } from "@/store/index"; // 导入根 reducer 文件路径
import { useSelector } from "react-redux";

const BookPage = () => {
  const books = useSelector((state: RootState) => state.book.books); // 使用 useSelector 获取书籍数据
  return (
    <>
      <div className="add-button-container">
        <AddBook></AddBook>
      </div>

      <div className="book-container">
        {/* 遍历书籍列表并渲染每本书 */}
        {books.map((book: typeBook, index: number) => (
          <Book
            key={index}
            name={book.name}
            price={book.price}
            category={book.category}
            description={book.description}
          />
        ))}
      </div>
    </>
  );
};

export default BookPage;
