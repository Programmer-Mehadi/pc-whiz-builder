
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://PC_WHIZ_BUILDER:LoJBWYzKgGrK1bQA@cluster0.8nrjrgb.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function runThree(req, res) {
    try {
        await client.connect();
        const db = await client.db("pc-whiz-builder")
        const productsCollection = db.collection("products");
        if (req.method === "GET") {
            const product = await productsCollection.find().toArray()
            res.status(200).json(product);
        }
    } catch (err) {
        console.log("Error connecting to MongoDB:", err);
    } finally {
        // Ensures that the client will close when you finish/error
    }
}

export default runThree