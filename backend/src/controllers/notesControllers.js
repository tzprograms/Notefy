import Note from "../models/Note.js"


export async function getAllNotes(req , res){
	try {
		const notes = await Note.find({ userId: req.user._id }).sort({createdAt : -1})
		res.status(200).json(notes)
	} catch (error) {
		console.error("Erorr in getting notes" , error)
		res.status(500).json({message : "Internal Server error"})
	}
}

export async function getNote(req , res){
	try {
		const note = await Note.findOne({ _id: req.params.id, userId: req.user._id })
		if (!note) return res.status(404).json({ message: "Note not found" });
		res.status(200).json(note)

	} catch (error) {
		console.error("Erorr in getting the note " ,  error)
		res.status(500).json({message : "Internal Server error"})
	}
}

export async function createNotes(req , res){
	try {
		const {title , content} = req.body
		const newNote = new Note({title , content , userId : req.user._id})

		const savedNote = await newNote.save()
		res.status(201).json(savedNote)
		
	} catch (error) {
		res.status(500).json({message : "Internal Server error"})
	}
}

export async function updateNotes(req , res){
	try {
		const {title , content} = req.body
		const updatedNote = await Note.findOneAndUpdate({ _id: req.params.id, userId: req.user._id } , {title , content} , {new : true})

		if (!updatedNote) return res.status(404).json({message: "Note not found"})

		res.status(200).json(updatedNote)

	} catch (error) {
		res.status(500).json({message : "Internal Server error"})
	}
}

export async function deleteNotes(req , res){
	try {
		const deletedNote = await Note.findOneAndDelete({
			_id: req.params.id,
      		userId: req.user._id,
		});

		if (!deletedNote) return res.status(404).json({message: "Note not found"})

		res.status(200).json({deletedNote })
	} catch (error) {
		res.status(500).json({message : "Internal Server error"})
	}
}