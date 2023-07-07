import { FC } from 'react';

import Image from 'next/image';
import { User } from 'next-auth';

type Props = {
  user: User;
  type: string;
};

const UserCard: FC<Props> = ({ user, type }) => {
  return (
    <section className="flex flex-col gap-4">
      {user?.name ? (
        <>
          <div className="flex flex-col items-center rounded-lg bg-white p-6 text-5xl font-bold text-black">
            Hello {user?.name}
          </div>

          <div className="flex flex-col items-center rounded-lg bg-white p-6 text-5xl font-bold text-black">
            {user?.email}
          </div>

          <Image
            className="mx-auto mt-8 rounded-full border-4 border-black shadow-black drop-shadow-xl dark:border-slate-500"
            src={user?.image ?? '/images/profile.svg'}
            width={200}
            height={200}
            alt={user?.name ?? 'Profile Picture'}
            priority={true}
          />
        </>
      ) : null}
      <p className="text-center text-2xl">{type} Page!</p>{' '}
      <p className="text-center text-2xl">Role: {user.role}!</p>
    </section>
  );
};

export default UserCard;
