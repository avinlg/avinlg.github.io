import Image from "next/image";
import data from "./api/data.json"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between">
      <div className="flex left-0 bg-gray-800 min-w-1/3 w-1/3">
        <Image
          src='/images/software-developer.svg'
          alt='profile image'
          className="dark:invert-0"
          width={100}
          height={24}
          priority
        />
      </div>
      <div className="flex right-0 bg-gray-800 min-w-2/3 w-2/3">
        <span>Contacts</span>
      </div>
    </main>
  );
}
