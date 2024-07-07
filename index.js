const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.json({ text: "Hello World" })
})

app.get('/users', (req, res) => {
    res.send("List of users")
})

app.get('/users/1', (req, res) => {
    res.send("Hi I'm roll number 1")
})

app.use((req, res) => {
    res.status(404).send("404 Not Found")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
}
)