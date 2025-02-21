const express = require ("express");

const app = express();
const PORT = 5500;

app.get("/", (req,res) =>{
    res.json({ message: "Random Image API is running!" })
});

app.get("/api/image/random", (req,res) =>{
    const imageUrl = `https://picsum.photos/800/600`;
    res.redirect(imageUrl);
})

app.listen(PORT, () =>{
    console.log(`Server running on http://localhost:${PORT}`);
})