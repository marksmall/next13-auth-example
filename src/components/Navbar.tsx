import { FC } from 'react';

import Link from 'next/link';

const PAGES = [
  {
    label: 'Home',
    url: '/',
  },
  {
    label: 'Sign In',
    url: '/api/auth/signin',
  },
  {
    label: 'Sign Out',
    url: '/api/auth/signout',
  },
  {
    label: 'Server',
    url: '/server',
  },
  {
    label: 'Client',
    url: '/client',
  },
  {
    label: 'About',
    url: '/about',
  },
];

type Props = {};

const Navbar: FC<Props> = ({}) => {
  return (
    <nav className="bg-blue-800 p-4">
      <ul className="flex justify-evenly text-2xl font-bold">
        {PAGES.map((page) => (
          <li key={page.label}>
            <Link href={page.url}>{page.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
