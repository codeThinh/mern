let express = require('express')
let dotenv = require('dotenv').config()
let { errorHandler } = require('./middleware/errorMiddleware')
let port = process.env.PORT || 5000

let app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${port}`))