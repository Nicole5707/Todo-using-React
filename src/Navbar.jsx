import Button from "./Button";
const Navbar = ({ link }) => {
  const style = {
    nav: {
      height: "100%",
      width: "20%",
      position: "fixed",
      zIndex: "1",
      top: "0",
      left: "0",
      backgroundColor: "#008b8b",
      transition: ".5s ease",
      overflowX: "hidden",
      paddingTop: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    styleButton: {
      marginRight: "180px",
      background: "none",
      border: "none",
      fontSize: "30px",
      color: "white",
      cursor: "pointer",
    },

    link: {
      color: "white",
      textDecoration: "none",
    },
  };
  const navbarList = link.map((link) => (
    <li key={link} style={{listStyle:"none", padding:"5px"}}>
      <a href="#" style={style.link}>
        {link}
      </a>
    </li>
  ));

  const handleClose = () => {
    window.location.reload();
    };

  return (
    <nav style={style.nav}>
      <Button
        style={style.styleButton}
        buttonType="close"
        onClick={handleClose}
      />
      <ul
        style={{
          color: "white",
          fontSize: "20px",
          marginLeft: "-150px",
          marginTop: "100px",
        }}
      >
        {navbarList}
      </ul>
    </nav>
  );
};

export default Navbar;
