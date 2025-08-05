import Image from "next/image";

export default function MinuCharacter() {
  return (
    <Image
      src='/images/logos/MinuCharacter.svg'
      alt='MINU Logo'
      width={118}
      height={86}
      priority
    />
  );
}
