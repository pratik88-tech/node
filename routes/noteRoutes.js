const express=require("express");
const { getNotes, createNote, deleteNote, updateNote } = require("../controllers/noteController");
const notesRouter=express.Router();
notesRouter.get("/",getNotes)
notesRouter.post("/",createNote)
notesRouter.delete("/:id",deleteNote)
notesRouter.put("/:id",updateNote)

module.exports=notesRouter;