const {MongoClient, ServerApiVersion}=require('mongodb');
const uri="mongodb+srv://agarwalarchie17:V5wgmggKJTqGtZIY@cluster0.bihiyz8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client=new MongoClient(uri, {
    serverApi:{
        version:ServerApiVersion.v1,
        strict:true,
        deprecatedErrors:true
    }
});
async function run(){
    try{
        await client.connect();
        await client.db("admin").command({ping:1});
        console.log("Pinged your deployment. You successfully connected to mongodb!");
    }finally{
        await client.close();
    }
}
run().catch(console.dir);