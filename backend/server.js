let express = require('express')
let colors = require('colors')
let dotenv = require('dotenv').config()
let { errorHandler } = require('./middleware/errorMiddleware')
let connectDB = require('./config/db')
const { connect } = require('mongoose')
let port = process.env.PORT || 5000

connectDB()
let app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${port}`))