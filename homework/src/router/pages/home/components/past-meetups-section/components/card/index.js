import PropTypes from 'prop-types';

const Card = ({ title, date, went }) => {
  return (
    <div className='past-meetups-card'>
      <div className='past-meetups-card-heading'>
        <p>27 November 2017</p>
      </div>
      <hr className='separator' />
      <div className='past-meetups-card-body'>
        <p className=''>#39 JakartaJs April Meetups with kumparan</p>
        <div className='past-meetups-card-body-attendance'>
          <p className='past-meetups-card-body-total-joined'>139</p>
          <p>went</p>
        </div>
        <button type='button' className='past-meetups-card-detail-button'>
          View
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  went: PropTypes.number.isRequired,
};

export default Card;
