'use client';

import { FC } from 'react';

import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

import UserCard from '~/components/UserCard';

type Props = {};

const ClientPage: FC<Props> = ({}) => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin?callbackUrl=/client');
    },
  });

  console.log('CLIENT SESSION: ', session);
  if (!session?.user) {
    return null;
  }

  return (
    <section className="flex flex-col gap-6">
      <UserCard user={session?.user} type="client" />
    </section>
  );
};

export default ClientPage;
