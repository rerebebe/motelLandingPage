import "../../App.css";
import columbus from "../../columbus.jpeg";

export const navLinks = [
  { href: "/", name: "HOME" },
  { href: "/", name: "Customer" },
  { href: "/", name: "Reservation" },
  { href: "/", name: "Rooms" },
];

function Nav() {
  return (
    <nav>
      <div className="TopBar">
        <div>phone:</div> <div>address:</div>
      </div>
      <div className="LinkBar">
        {/* <a>
          <img src={require("../../columbus.jpeg")} />
        </a> */}
        {navLinks.map((link) => (
          <a key={link.name} href={link.href}>
            {link.name === "HOME" ? (
              <a className="HomePageMark">Columbus</a>
            ) : (
              <a className="EachLink">{link.name}</a>
            )}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
