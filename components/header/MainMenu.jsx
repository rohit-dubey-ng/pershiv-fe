import Link from "next/link";
import {
  menuItems,
  pagesItems,
  portfolioItems,
  blogItems,
  showCaseItems,
  creatorsHubItems,
  locateUsItems,
  contactUsItems,
} from "../../data/menu";

import { useRouter } from "next/router";

const MainMenu = () => {
  const router = useRouter();

  const isActive = (link) => {
    return router.pathname.replace("/[id]", "") === link.replace(/\/\d+$/, "");
  };

  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <img
                  src="/images/assets/logo.png"
                  alt=""
                  width={100}
                />{" "}
                
              </Link>
            </div>
          </li>
          {/* End li */}

          <li className="nav-item dropdown mega-dropdown-md">
            <a className="nav-link active-menu" href={"/"} role="button">
              Home
            </a>
          </li>
          {/* End li (home mega menu) */}

          <li className="nav-item  dropdown">
            <Link href="/about/our-values" role="button" className="nav-link">
              About
            </Link>
            {/* <a
              className={
                pagesItems.some((menu) => menu.link) ||
                isActive("/pages-menu/pricing") ||
                isActive("/pages-menu/testimonials")
                  ? "nav-link dropdown-toggle active-menu"
                  : "nav-link dropdown-toggle"
              }
              href="#"
              role="button"
              aria-expanded="false"
            >
              About
            </a> */}
            {/* <ul className="dropdown-menu">
              {pagesItems.map((item, index) => (
                <li className="" key={index}>
                  <a
                    className="dropdown-item"
                    aria-expanded="false"
                    href={item?.link}
                  >
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul> */}
          </li>
          {/* End li (pages) */}

          <li className="nav-item dropdown">
            <a
              // className="nav-link dropdown-toggle"
              className={
                portfolioItems.some((elm) => isActive(elm.link))
                  ? "nav-link dropdown-toggle active-menu"
                  : "nav-link dropdown-toggle"
              }
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Product
            </a>
            <ul className="dropdown-menu">
              {portfolioItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className={`dropdown-item ${isActive(item.link) ? "active" : ""
                      }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {/* End li (portfolio) */}

          <li className="nav-item dropdown">
            <a
              // className="nav-link dropdown-toggle"
              className={
                blogItems.some((elm) => isActive(elm.link))
                  ? "nav-link dropdown-toggle active-menu"
                  : "nav-link dropdown-toggle"
              }
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false">
              Why Pershiv
            </a>
            <ul className="dropdown-menu">
              {blogItems.map((blog, index) => (
                <li key={index}>
                  <Link
                    href={blog.link}
                    className={`dropdown-item ${isActive(blog.link) ? "active" : ""
                      }`}
                  >
                    <span>{blog.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {/* End li (blog) */}

          <li className="nav-item dropdown">
            <a
              // className="nav-link dropdown-toggle"
              className={
                showCaseItems.some((elm) => isActive(elm.link))
                  ? "nav-link dropdown-toggle active-menu"
                  : "nav-link dropdown-toggle"
              }
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Showcase
            </a>
            <ul className="dropdown-menu">
              {showCaseItems.map((showcase, index) => (
                <li key={index}>
                  <Link
                    href={showcase.link}
                    className={`dropdown-item ${isActive(showcase.link) ? "active" : ""
                      }`}
                  >
                    <span>{showcase.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="nav-item dropdown">
            <Link href="/contact/customer-complaint" role="button" className="nav-link">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainMenu;
