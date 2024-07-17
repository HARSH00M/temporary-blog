const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const blogs = require('./api/blogsData.json')
const port = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json())
app.use((req, res)=>{
  res.sendFile(path.join(__dirname,".","dist","index.html"))
  })  
app.get('/', (req, res) => {
  res.send("Blog server is running!")
});

app.get('/blogs', (req, res) => {
  res.send(blogs)
})
app.get('/blogs/:id?', (req, res) => {
  const id = Number(req.params.id);
  const blog = blogs.filter(b => b.id === id);
  if(blog.length === 0) {
    res.status(404).send("Blog not found");
  }
  res.send(blog)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})