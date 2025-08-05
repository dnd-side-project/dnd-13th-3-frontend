interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className='flex flex-col min-h-screen bg-[#557AF3] relative items-center justify-between'>
      {children}
    </main>
  );
}
