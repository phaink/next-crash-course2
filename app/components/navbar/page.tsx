import Link from "next/link";
import Image from "next/image";
import Logo from "./bus-logo.png";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="bus logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
