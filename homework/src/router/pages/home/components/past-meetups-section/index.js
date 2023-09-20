import Card from './components/card';

const infoCards = [
  {
    title: '39 JakartaJs April Meetups with kumparan',
    date: '27 November 2017',
    went: 139,
  },
  {
    title: '39 JakartaJs April Meetups with BliBli',
    date: '27 November 2017',
    went: 113,
  },
  {
    title: '39 JakartaJs April Meetups with Hacktiv8',
    date: '27 November 2017',
    went: 110,
  },
];

const PastMeetupsSection = () => {
  return (
    <section className='past-meetups-section'>
      <div className='past-meetups-heading'>
        <h1 className='heading-1'>Past Meetups</h1>
        <h3>See all</h3>
      </div>
      <div className='past-meetups-container-wrapper'>
        <div className='past-meetups-container'>
          <div className='past-meetups-body'>
            {infoCards.map(({ title, date, went }, index) => (
              <Card key={index} title={title} date={date} went={went} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastMeetupsSection;
