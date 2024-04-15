"use client";
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { updateBook } from "@/store/bookSlice";
import { typeBook } from "@/types";
import "./page.css";
import { useState, useImperativeHandle, forwardRef } from "react";

const ModifiedBook = forwardRef(
  ({ name, price, category, description }: typeBook, ref) => {
    const [open, setOpen] = React.useState(false);
    useImperativeHandle(ref, () => ({
      // changeVal 就是暴露给父组件的方法
      showDialog: () => {
        setOpen(true);
      },
    }));

    const dispatch = useDispatch();

    const handleClickOpen = () => {};

    const handleClose = () => {
      setOpen(false);
    };

    const oldName = name;

    return (
      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              console.log("submitted");
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries((formData as any).entries());
              const { price, category, description, name } = formJson;
              const newBook = {
                oldName,
                name,
                price,
                category,
                description,
              };
              dispatch(updateBook(newBook));

              handleClose();
            },
          }}
        >
          <DialogTitle>Modified Book</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To modified a new book, please enter the name, price, category and
              description.
            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Book Name"
              type="string"
              fullWidth
              variant="standard"
              defaultValue={name}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="price"
              name="price"
              label="Price"
              type="string"
              fullWidth
              variant="standard"
              defaultValue={price}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="category"
              name="category"
              label="Category"
              type="string"
              fullWidth
              variant="standard"
              defaultValue={category}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="description"
              name="description"
              label="Description"
              type="string"
              fullWidth
              variant="standard"
              defaultValue={description}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Comfirm update</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
);
ModifiedBook.displayName = "ModifiedBook";

export default ModifiedBook;
