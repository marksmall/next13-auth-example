import { FC } from 'react';

import { getServerSession } from 'next-auth';

import UserCard from '~/components/UserCard';

import { authOptions } from './api/auth/[...nextauth]/route';

type Props = {};

const HomePage: FC<Props> = async ({}) => {
  const session = await getServerSession(authOptions);

  return (
    <>
      {session ? (
        <UserCard user={session?.user} type="home" />
      ) : (
        <h1 className="text-5xl">You shall not pass</h1>
      )}
    </>
  );
};

export default HomePage;
