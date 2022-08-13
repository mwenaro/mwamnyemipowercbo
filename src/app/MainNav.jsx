import Nav from 'react-bootstrap/Nav'

export default function MainNav() {
  return (
    <Nav
     
    >
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about" eventKey="/link-1">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/contact" eventKey="/link-2">Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/gallery" eventKey="/gallery" >
          Gallery
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export function LovelyNav() {
  return (
    <nav className='nav'>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/contact'>Contact</a></li>
        <li><a href='/gallery'>Gallery</a></li>
      </ul>
      <ul>

        <li><a href='#'>Sign up</a></li>
        <li><a href='#'>Login</a></li>
      </ul>
    </nav>
  )
}


