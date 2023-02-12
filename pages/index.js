import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Meetup 1",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Address 1",
    description: "The Meetup 1",
  },
  {
    id: "m2",
    title: "Meetup 2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Address 2",
    description: "The Meetup 2",
  },
  {
    id: "m3",
    title: "Meetup 3",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Address 3",
    description: "The Meetup 3",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
