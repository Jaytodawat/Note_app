const express = require('express');
const router = express.Router();

const Note = require('./../model/Note');

router.get('/list', async function (req, res) {
    const notes = await Note.find();
    res.json(notes);
});

//notes acc to userid
router.post('/list', async function (req, res) {
    const notes = await Note.find({ userid: req.body.userid });
    res.json(notes);
});

//add notes
router.post('/add', async function (req, res) {
    // res.json(req.body);
    await Note.deleteOne({ id: req.body.id });
    const newNote = Note({
        id: req.body.id,
        userid: req.body.userid,
        title: req.body.title,
        content: req.body.content,
    });
    await newNote.save();
    const response = { message: "New Note Created! " + `id: ${req.body.id}` }
    res.json(response);

});


//delete Note
router.post('/delete', async function (req, res) {
    await Note.deleteOne({ id: req.body.id });
    const response = { message: "Note deleted! " + `id: ${req.body.id}` }
    res.json(response);
})

module.exports = router;