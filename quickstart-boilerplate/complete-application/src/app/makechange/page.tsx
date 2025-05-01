import { getServerSession } from 'next-auth';
import { authOptions } from "@/app/utils/authOptions";
import { redirect } from 'next/navigation';
import MakeChangeForm from '../../components/MakeChangeForm';

export default async function MakeChange() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/');
  }
  return (
    <>
      <MakeChangeForm />
    </>
  );
}
