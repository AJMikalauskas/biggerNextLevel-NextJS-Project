// This is an api endpoint. need api folder in pages folder keyname specific.
    // This is only run on the server, can send credentials because it's not compromised by the client
        // These api endpoints are called in component functions -> this api endpoint is -> "/api/new-meetup"
            // In req and res you can access headers, method, JSON, body,  etc... similar to NodeJS and ExpressJS 


//MongoDB is connected with a my account : xjmikalauskas@gmail.com
    // imports are below
import { MongoClient } from 'mongodb';
async function handler(req, res) {
    // only use request if it's a POST request
        //optional: could add error handling via try catch or specifically for this
    if(req.method === "POST") {
        // access body of the POST reqeust whcih contains object of things extracted from object destructure below
        const data = req.body;

        //use object destructuring to know what we get out of this
            //expect title, image, description, id, address
        //const { title, image, address, description } = data;
        // Stored in DB(MongoDB) 
            // use connection string from MongoDB when click connect btn -> replace <password> with password 
                // and can replace myFirstDatabase with any DB name you want, secure place to store credentials because on server not client
        // returns a promise which is handled by making this an async function
            // make sure to define client at this await MongoClient
        const client = await MongoClient.connect("mongodb+srv://Xander_Mik:Isaiah55@cluster0.hjuun.mongodb.net/testDb?retryWrites=true&w=majority")
        // get hold of database by, if not existed yet, created on the fly:
        const db = client.db();

        // get access to meetups collection which is in the DB -> NoSQL DB collections full of documents in MongoDB
            // collections hold multiple entries/documents, creates collection on the fly if not existed yet when called
                // .collection()
        const meetupsCollection = db.collection('meetups')
        // Inserts one document/entry into document, there are also many other command in mongoDB including adding/removing mutliple
            // destructuring becomes unneccessary aboe, can just add the data which is the request body
                // object is expected in insertOne() and is still passed in via insertOne()
                    // get result of operation asynchronously with auto generated id
        const result = await  meetupsCollection.insertOne(data);
        console.log(result);

        // close DB connection once done adding to DB
        client.close();

        // send back response -> like node and express JS, 201 means somethings was successfully added
            // message property in .json() isn't required but it's just to send to the user/page that it was successfully called and completed
        res.status(201).json({message: 'Meetup Inserted!'});
    }
}

export default handler;