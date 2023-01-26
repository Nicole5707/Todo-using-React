import React from "react";

function Header() {
  const style = {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '120px',
      // background: 'red',
      color: '#ececec',
      paddingTop: '80px',
      marginRight:"150px",
  }
  return (
    <div>
      <h1 style={style}>todos</h1>
    </div>
  );
}

export default Header;
