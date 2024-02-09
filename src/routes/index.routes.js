import {Router} from 'express'
import {
    renderTasks,
    addTasks,
    toggleDoneTasks,
    deleteTasks,
    editTasks,
    editView



    /*




    */

} from '../controllers/task.controller'

const router = Router()


router.get("/", renderTasks)

router.post("/tasks/add", addTasks)

router.get("/tasks/:id/toggleDone", toggleDoneTasks)

router.get("/tasks/:id/delete", deleteTasks)

router.get("/tasks/:id/edit", editView)

router.post("/tasks/:id/edit", editTasks)

export default router

/*











*/