import MeetupDetail from '@/components/meetups/MeetupDetail';
import client from '@/utils/dbClient';
import { ObjectId } from 'mongodb';
import Head from 'next/head';

function MeetupDetails({ image, title, address, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <MeetupDetail image={image} title={title} address={address} description={description} />
    </>
  );
}

export async function getStaticPaths() {
  await client.connect();
  const db = client.db();
  const meetupsCollection = db.collection('meetupsCollection');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({ params: { meetupId: meetup._id.toString() } })),
  };
}

export async function getStaticProps(context) {
  console.log('details - getStaticProps');

  const meetupId = context.params.meetupId;

  await client.connect();
  const db = client.db();
  const meetupsCollection = db.collection('meetupsCollection');

  const meetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) });

  return {
    props: {
      id: meetup._id.toString(),
      title: meetup.title,
      image: meetup.image,
      description: meetup.description,
      address: meetup.address,
    },
  };
}

export default MeetupDetails;
