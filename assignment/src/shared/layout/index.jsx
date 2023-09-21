import { Link, Outlet, useLocation } from 'react-router-dom';

const navList = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Experience',
    link: '/experience',
  },
  {
    title: 'Skills',
    link: '/skills',
  },
  {
    title: 'Interests',
    link: '/interests',
  },
  {
    title: 'Awards',
    link: '/awards',
  },
];

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className='navbar'>
      <div className='profile-image-wrapper'>
        <img
          className='profile-image'
          src='https://fastly.picsum.photos/id/409/200/300.jpg?hmac=DMEn4qNc0DsvxlQ4NSDPOesRyq8VhhGEi6IXy2DblLk'
          alt=''
        />
      </div>
      {navList.map(({ title, link }, index) => (
        <Link
          key={index}
          className={pathname === link ? 'link-item-active' : 'link-item'}
          to={link}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export const Layout = () => {
  return (
    <div className='layout-wrapper'>
      <Navbar />
      <div className='children'>
        <Outlet />
      </div>
    </div>
  );
};
