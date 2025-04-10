import Link from "next/link";
import Image from "next/image";
export default function NavBar() {
  return (
    <div
      dir="ltr"
      className="animate-fade-down animate-once animate-ease-out alexandria flex justify-between items-center gap-4 py-2 bg-ace mx-auto"
    >
      <div className="sm:ml-20 ml-4 cursor-pointer flex items-center gap-6">
        <Image
          className="hover:scale-110 hover:rotate-360 transition-all duration-300"
          src="/logo.png"
          alt="logo"
          width={50}
          height={50}
        />
        <Link
          className=" hover:scale-110 transition-all duration-300 text-primary font-bold text-2xl"
          href="/"
        >
          IUST Lecture Materials
        </Link>
      </div>
      <div className="sm:mr-20 mr-4 hover:scale-110 transition-all duration-300 text-teal-700 font-bold cursor-pointer rounded-md">
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
}
