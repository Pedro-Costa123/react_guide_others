import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const AUTH = process.env.DB_HOST_AND_PASS;

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      address={props.meetupData.address}
      description={props.meetupData.description}
      title={props.meetupData.title}
    />
  );
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://" +
      AUTH +
      "@cluster0.tpda04g.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        description: selectedMeetup.description,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://" +
      AUTH +
      "@cluster0.tpda04g.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};

export default MeetupDetails;
