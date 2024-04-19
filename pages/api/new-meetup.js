import client from '@/utils/dbClient';

// /api/new-meetup
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    try {
      await client.connect();
      // Send a ping to confirm a successful connection
      // await client.db('admin').command({ ping: 1 });

      const db = client.db();
      const meetupsCollection = db.collection('meetupsCollection');
      await meetupsCollection.insertOne(data);
    } catch (e) {
      res.status(500).json({ message: 'Failed to insert meetup' });
    } finally {
      await client.close();
    }

    res.status(201).json({ message: 'Meetup Inserted' });
  }
}
