// import { redirect } from 'next/navigation';

// const page = () => {
//   redirect('https://drive.google.com/file/d/1KxSHR2BzPfq-38XHw_q3gE0FpvBYDAp8/view');
// };

// export default page;

// app/cv/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AppBar from '@/components/ui/AppBar';

export default function CVPage() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('https://drive.google.com/file/d/1KxSHR2BzPfq-38XHw_q3gE0FpvBYDAp8/view');
    }, 1000); // 1 seconds delay before redirect

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <>
      <AppBar />
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-pulse text-xl font-medium text-gray-500">
            Redirecting to Arghya&apos;s CV...
          </div>
          <div className="mt-2 text-sm text-gray-300">
            If it doesn’t redirect, <a className="text-blue-600 underline" href="https://drive.google.com/file/d/1KxSHR2BzPfq-38XHw_q3gE0FpvBYDAp8/view" target="_blank">click here</a>.
          </div>
        </div>
      </div>
    </>
  );
}
