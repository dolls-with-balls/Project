const exports = require("express");
const cors = require("cors");
app.use(cors());

app.get('/', (req, res) => {
    res.send("hello mfs")
})

app.listen(8080)