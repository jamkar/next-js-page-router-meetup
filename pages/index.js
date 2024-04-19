import MeetupList from '@/components/meetups/MeetupList';
import client from '@/utils/dbClient';

function HomePage({ meetups }) {
  return (
    <>
      <MeetupList meetups={meetups} />
    </>
  );
}

// export async function getServerSideProps(context) {
//   // const req = context.req;
//   // const res = context.res;
//   // console.log('req: ', req);
//   // console.log('res: ', res);
//   console.log('index - getServerSideProps');

//   await client.connect();
//   const db = client.db();
//   const meetupsCollection = db.collection('meetupsCollection');

//   const meetups = await meetupsCollection.find().toArray();

//   client.close();

//   return {
//     props: {
//       meetups: meetups.map((meetup) => ({
//         title: meetup.title,
//         address: meetup.address,
//         image: meetup.image,
//         id: meetup._id.toString(),
//       })),
//     },
//   };
// }

export async function getStaticProps() {
  console.log('index - getStaticProps');

  await client.connect();
  const db = client.db();
  const meetupsCollection = db.collection('meetupsCollection');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
