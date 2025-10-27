'use client';
import { SplineSceneBasic } from "@/components/ui/demo";

export default function CompanyPage() {
  // Security Gate
  if (typeof window !== 'undefined' && sessionStorage.getItem('isAuthenticated') !== 'true') {
    window.location.replace('/index.html');
    return null;
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <SplineSceneBasic />
    </main>
  );
}
