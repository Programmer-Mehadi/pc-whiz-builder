
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

async function run(req, res) {
    try {
        await client.connect();
        const db = await client.db("pc-whiz-builder")
        const productsCollection = db.collection("products");
        if (req.method === "GET") {
            const products = await productsCollection.aggregate([{
                $match: {
                    category: req.query.categoryId
                }
            }, {
                $project: {
                    _id: 1,
                    image: 1,
                    productName: 1,
                    category: 1,
                    price: 1,
                    status: 1,
                    rating: 1,
                }
            }
            ]).toArray();
            res.status(200).json(products);
        }
    } catch (err) {
        // console.log("Error connecting to MongoDB:", err);
    } finally {
        // Ensures that the client will close when you finish/error
    }
}

export default run