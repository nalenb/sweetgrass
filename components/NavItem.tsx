import Link from 'next/link'

export default function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  )
}
