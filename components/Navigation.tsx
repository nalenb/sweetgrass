import NavItem from './NavItem'

export default function Navigation() {
  return (
    <nav>
      <ul>
        <NavItem href='/'>Home</NavItem>
        <NavItem href='/about'>About</NavItem>
      </ul>
    </nav>
  )
}
