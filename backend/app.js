const express = require('express')
const app = express()

const studySetRouter = require('./routes/studySet')
const connectDB = require('./db/connect')
require('dotenv').config()

const cors = require('cors')

app.use(cors())
app.use(express.json())

//test route
app.get('/test', (req, res) => {
    res.send("Hello!")
})

//routes
app.use('/api/v1/studySets', studySetRouter)

const port = 3001

const bootApp = async () => {
    try {
        //connect to db
        await connectDB(process.env.MONGO_URI)

        //start server
        app.listen(port, () => console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

bootApp()