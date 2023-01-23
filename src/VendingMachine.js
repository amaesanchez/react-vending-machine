import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <nav className="VendingMachine-navbar">
      <Link to="/coffee">Coffee</Link>
      <br/>
      <Link to="/chocolate">Chocolate</Link>
      <br/>
      <Link to="/hichews">Hi-Chews</Link>
    </nav>
  )
}

export default VendingMachine;
