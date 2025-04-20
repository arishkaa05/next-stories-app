'use client';

import { FC, useState } from 'react';
import { Container } from './container';
import Image from 'next/image';
import Link from 'next/link';
import { AuthModal } from './modals/auth-modal';
import { ProfileButton } from '.';
import { cn } from '@/shared/utils/cn';

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  const [openAuthModal, setOpenAuthModal] = useState(false);

  return (
    <header className={cn('border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/next.svg" alt="Logo" width={110} height={35} />
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <AuthModal
            open={openAuthModal}
            onClose={() => setOpenAuthModal(false)}
          />

          <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />
        </div>
      </Container>
    </header>
  );
};
