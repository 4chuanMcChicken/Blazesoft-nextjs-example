"use client";
import React from "react";
import "./page.css";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { removeBook } from "@/store/bookSlice";
import { typeBook } from "@/types";
import FormDialogUpdate from "@/app/books/ModifiedBook";
import { useRef } from "react";

interface BookProps {
  name: string;
  price: string;
  category: string;
  description: string;
}

const Book: React.FC<BookProps> = ({
  name,
  price,
  category,
  description,
}: typeBook) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeBook(name));
  };

  const childRef = useRef<{ showDialog: () => void }>();

  const handleBookClick = () => {
    childRef.current?.showDialog();
  };
  return (
    <div className="book">
      <div className="book-info" onClick={handleBookClick}>
        <h2 style={{ fontSize: "24px" }}>{name}</h2>
        <p>
          <strong>Price:</strong> {price}
        </p>
        <p>
          <strong>Category:</strong> {category}
        </p>
        <p>
          <strong>Description:</strong> {description}
        </p>
      </div>
      <div className="delete-button">
        <Button variant="outlined" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </div>
      <FormDialogUpdate
        ref={childRef}
        name={name}
        price={price}
        category={category}
        description={description}
      />
    </div>
  );
};

export default Book;
