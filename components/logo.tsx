import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="focus-ring inline-flex items-center rounded-md"
      aria-label="KB Enterprise Solutions home"
    >
      <Image
        src="/kb-enterprise-logo.png"
        alt="KB Enterprise Solutions LLC"
        width={215}
        height={150}
        priority
        className="h-12 w-auto object-contain sm:h-14"
      />
    </Link>
  );
}
