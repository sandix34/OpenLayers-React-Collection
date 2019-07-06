import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginTop: `10rem`,
    }}
  >
    <div
      style={{
        margin: ` auto`,
      }}
    >
      <h1
        style={{
          margin: 0,
          textAlign: "center",
          fontSize: "3em",
          color: `white`,
        }}
      >
        {siteTitle}
      </h1>
    </div>
  </header>
)

export default Header
