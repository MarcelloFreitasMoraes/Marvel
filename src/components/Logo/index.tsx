import Image from "next/image";
import Link from "next/link";

import Logo from 'assets/vector.svg';

export function LogoComponent() {
  return (
    <Link href="/" passHref>
        <Image src={Logo} alt="Marvel" width={150} height={80} />
    </Link>
  )
}
