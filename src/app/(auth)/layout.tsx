export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col h-screen overflow-hidden px-screen-margin'>
      <div className='flex-1 overflow-hidden'>{children}</div>
    </div>
  );
}
