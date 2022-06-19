import Link from 'next/link';

export default ({ currentUser }) => {
  const links = [
    !currentUser && { label: 'Sign Up', href: '/auth/signup' },
    !currentUser && { label: 'Sign In', href: '/auth/signin' },
    currentUser && { label: 'Sign Out', href: '/auth/signout' }
  ]
    .filter(linkConfig => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} className="nav-item">
          <Link href={href}>
            <a className="nav-link text-white">{label}</a>
          </Link>
        </li>
      );
    });

  return (
    <nav className=" navbar navbar-dark" style={{backgroundColor: "#37474f"}}>
      <Link href="/">
        <a className="navbar-brand text-white p-2">EvEnt Ticketing</a>
      </Link>

      <div className="d-flex justify-content-end ">
        <ul className="nav d-flex align-items-center ">{links}</ul>
      </div>
    </nav>
  );
};
