const ProfileSection = () => {
  return (
    <section className='profile-section'>
      <div className='profile-container'>
        <div className='profile-image'>.</div>
        <div className='profile-info'>
          <h1 className='heading-1'>Hacktiv8 Meetup</h1>
          <table className='profile-info-table'>
            <tbody className='profile-info-table-body'>
              <tr className='profile-info-table-row'>
                <td className='profile-info-table-display'>
                  <p>Location</p>
                </td>
                <td className='profile-info-table-display'>
                  <p>Jakarta, Indonesia</p>
                </td>
              </tr>
              <tr className='profile-info-table-row'>
                <td className='profile-info-table-display'>
                  <p>Member</p>
                </td>
                <td className='profile-info-table-display'>
                  <p>1,078</p>
                </td>
              </tr>
              <tr className='profile-info-table-row'>
                <td className='profile-info-table-display'>
                  <p>Organizers</p>
                </td>
                <td className='profile-info-table-display'>
                  <p>Adhy Wiranata</p>
                </td>
              </tr>
            </tbody>
          </table>
          <button className='profile-info-button' type='button'>
            Join Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
