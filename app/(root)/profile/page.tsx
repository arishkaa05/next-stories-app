import { ProfileForm } from '@/shared/components';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  const session = true;

  if (!session) {
    return redirect('/not-auth');
  }

  const user = {
    createdAt: '2025-03-24T12:00:00.000Z',
    id: 'b1e2f3d4-5678-9abc-0def-1234567890ab',
    updatedAt: '2025-03-24T12:00:00.000Z',
    email: 'user@example.com',
    name: 'John Doe',
  };

  if (!user) {
    return redirect('/not-auth');
  }

  return <ProfileForm data={user} />;
}
