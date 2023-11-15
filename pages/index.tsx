import { useEffect } from 'react';
import { useRouter } from 'next/router';

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/dashboards/tasks'); // Redirect to the dashboard page
  }, [router]);

  return null; // Render nothing while redirecting
};

export default IndexPage;
