import NewMeetupForm from '@/components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';

function NewMeetupPage() {
  const router = useRouter();

  const onAddMeetup = async (data) => {
    await fetch('/api/new-meetup', { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
    router.push('/');
  };

  return <NewMeetupForm onAddMeetup={onAddMeetup} />;
}

export default NewMeetupPage;
