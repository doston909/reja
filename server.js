const http = require('http');
const mongodb = require('mongodb');

let db;
const connectionString = "mongodb+srv://dostonbek:GoQ7IOC06rcW55L1@cluster0.vtafco5.mongodb.net/Reja"

mongodb.connect(connectionString, {
    useNewUrlParser: true,  // bu ikkalasi mongoni yangi versionlar bilan bir hil ishlashi uchun yozilishi kerak
    useUnifiedTopology: true,
    }, 
    (err, client) => {
        if(err) console.log("ERROR on connecting MongoDB");
        else {
            console.log('MongoDB connection succeed');
           module.exports = client;
            const app = require('./app');
            const server = http.createServer(app);
            let PORT = 4009;
            server.listen(PORT, function () {
              console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
              );
            });
        }
    }
);
