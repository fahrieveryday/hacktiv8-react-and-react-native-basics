const AnnouncementSection = () => {
  return (
    <section className='announcement-section'>
      <h1 className='heading-1'>Next Meetup</h1>
      <div className='announcement-container-wrapper'>
        <div className='announcement-container'>
          <p>Awesome meetup and event</p>
          <p className='announcement-date'>25 January 2019</p>
          <div className='announcement-body'>
            <p>Hello JavaScript &amp; Node.js Ninjas!</p>
            <p>
              Get ready for our monthly meetup JakartaJS! This will be our fifth
              meetup of 2018!
            </p>
            <p>
              The meetup format will contain some short stories and technical
              talks.
            </p>
            <p>
              If you have a short announcement you'd like to share with the
              audience, you may do so during open mic announcements.
            </p>
          </div>
          <p>Remember to bring a photo ID to get through building security.</p>
          <p>- - - - -</p>
          <p>See you there!</p>
          <p>
            Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers
          </p>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementSection;
