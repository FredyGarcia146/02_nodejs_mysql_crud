import express from "express"
import {engine} from "express-handlebars"
import morgan from "morgan"
import indexRoutes from './routes/index.routes'
import path from 'path'

const app = express()

app.set('views', path.join(__dirname, 'views'))

app.engine(".hbs", engine({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    defaultLayout: 'main',
    extname: ".hbs",
}))

app.set('view engine', '.hbs')

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))


// statics files
app.use(express.static(path.join(__dirname,"public")))

// Routs
app.use(indexRoutes)



export default app