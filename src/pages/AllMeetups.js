import MeetupItem from '../components/meetups/MeetupItem';

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'Dehd Concert',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Slowdive_at_Crystal_Ballroom%2C_2014.jpg/1024px-Slowdive_at_Crystal_Ballroom%2C_2014.jpg',
    address: 'Burnside St., Portland, Oregon',
    description: 'This is a great new young band!',
  },
  {
    id: 'm2',
    title: 'Shovels and Rope Concert',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Shovels_%26_Rope_at_Riverfest_in_Grand_Rapids%2C_Minnesota.jpg/1280px-Shovels_%26_Rope_at_Riverfest_in_Grand_Rapids%2C_Minnesota.jpg',
    address: 'Eugene, Oregon',
    description: 'This is a very good folk style band.',
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All meetups</h1>
      <ul>
        {DUMMY_DATA.map(meetup => {
          return (
            <MeetupItem
              key={meetup.id}
              image={meetup.image}
              title={meetup.title}
              address={meetup.address}
              description={meetup.description}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default AllMeetupsPage;
