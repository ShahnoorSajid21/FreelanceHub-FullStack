const express = require("express")
const cors = require('cors')
var path = require("path")
const servicesRouter = require("./routes/services")

const app = express()
 let randomThing = 123

app.use(cors())
  app.use(express.json())
app.use(express.static(path.join(__dirname, "../client")))
app.use('/', servicesRouter)

app.use((err, req, res, next) => {
   console.log(err)
  res.status(500).json({ error: "something went wrong" })
})

var PORT = 3000
app.listen(PORT, () => {
 console.log("server running on port " + PORT)
})
