const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Other routes would go here

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
