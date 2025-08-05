export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex min-h-screen bg-[#557AF3] relative items-center justify-center'>
      <div className='flex-1 overflow-hidden'>{children}</div>
    </div>
  );
}
