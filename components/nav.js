import Link from 'next/link';
const Nav = () => (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <Link href="/">
           <a className="navbar-brand" >إعلانات الحبيب</a>
      </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
               <a className="nav-link active" aria-current="page">الرئيسية</a>
               </Link>
            </li>
            <li className="nav-item">
            <Link href="/blogs/">
              <a className="nav-link">الإعلانات</a>
            </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://wa.me/00963933569558" target="_blank"> أضف إعلانك
             </a>
            </li>
          </ul>
        </div>
      </div>
   </nav>
);

export default Nav;
