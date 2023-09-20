const MemberSection = () => {
  return (
    <section className='member-section'>
      <div className='member-heading'>
        <h1 className='heading-1'>Members</h1>
        <h3>See all</h3>
      </div>
      <div className='member-container-wrapper'>
        <div className='member-container'>
          <div className='profile-image' />
          <div className='member-body'>
            <p>Organizers</p>
            <div className='member-list'>
              <p>Adhy Wiranata</p>
              <p>4 others</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberSection;
