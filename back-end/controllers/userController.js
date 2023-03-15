const reminderDb = require('../models/userModel');
const params = require('params')


const createReminders = async (req, res) =>{
    const {name, age, job, objectives, image} = req.body;
    try {
        const response = await reminderDb.create({name, age, job, objectives, image});
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getReminders = async (req, res) =>{
    try {
        const getData = await reminderDb.find({}).sort({createdAt: -1});
        res.status(200).json(getData);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
}

const deleteReminders = async(req, res) => {
    const {id} = req.params
    //console.log(id);
    try {
        const deleteData = await reminderDb.findOneAndDelete({_id: id});
        res.status(200).json(deleteData);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {createReminders, getReminders, deleteReminders};