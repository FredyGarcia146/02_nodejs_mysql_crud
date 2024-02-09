//import Task from '../models/Task'
import { pool } from "../database";


export const renderTasks = async ( req, res) => {

    const [tasks] =  await pool.query("SELECT * FROM task");
    res.render('index',{tasks:tasks})

}


export const  addTasks = async (req, res) => {
    try {
        const task = req.body;
        await pool.query("INSERT INTO task set ?", [task]);
        res.redirect("/");
    }catch (e) {
        console.log(e)
    }
}

export const  toggleDoneTasks = async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("UPDATE task set done = CASE WHEN done=0 THEN 1 ELSE 0 END  WHERE id = ?", [id]);
        res.redirect("/");

    }catch (e) {
        console.log(e)
    }
}

export const deleteTasks =async (req, res) => {
    try {
        const { id } = req.params
        await pool.query("DELETE FROM task WHERE id = ?", [id]);
        res.redirect('/')
    }catch (e) {
        console.log(e)
    }
}

export const editView =async (req, res) => {
    try {
        const { id } = req.params
        const [tasks] =  await pool.query("SELECT * FROM task WHERE id = ?",[id]);
        res.render('edit',{tasks:tasks[0]})
    }catch (e) {
        console.log(e)
    }
}


export const editTasks =async (req, res) => {
    try {
        const { id } = req.params
        const task = req.body
        await pool.query("UPDATE task set ? WHERE id = ?", [task,id]);
        res.redirect("/");
    }catch (e) {
        console.log(e)
    }
}


/*







*/