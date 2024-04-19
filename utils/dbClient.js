import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = 'mongodb+srv://jamkar:gDWWclMtIJgC4Z1n@cluster0.ejj8lxs.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default client;
