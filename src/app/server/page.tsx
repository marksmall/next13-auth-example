import { FC } from 'react';

import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';

import { authOptions } from '~/app/api/auth/[...nextauth]/route';
import UserCard from '~/components/UserCard';

type Props = {};

const ServerPage: FC<Props> = async ({}) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/server');
  }

  return (
    <section className="flex flex-col gap-6">
      <UserCard user={session?.user} type="server" />
    </section>
  );
};

export default ServerPage;
