const express = require('express')
const server = express();
 
server.all('/', (req, res) => {
    res.send('Hola Mundo!');
});
 
function keepAlive() {
   server.listen(3000, () => { console.log("Si" + Date.now()) });
}

module.exports = keepAlive;