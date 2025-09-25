import express from 'express'
import { getNote , getAllNotes , createNotes , updateNotes , deleteNotes } from '../controllers/notesControllers.js';
import auth from "../middleware/auth.js"

const router = express.Router();

router.get("/" , auth , getAllNotes)

router.get("/:id" , auth , getNote)

router.post("/" , auth , createNotes)

router.put("/:id" , auth , updateNotes)

router.delete("/:id" , auth , deleteNotes)


export default router

