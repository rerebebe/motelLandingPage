import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import CheckInTab from "./CheckInTab";

const biggestText = {
  fontSize: "50px",
  fontWeight: "100",
};

function LandingPage() {
  return (
    <div>
      <section className="main-container">
        <div className="TextBox">
          <div>Hotel and Resort</div>
          <div style={biggestText}>Welcome To Columbus</div>
          <div>
            <button className="LoginButton">Log In</button>
          </div>
        </div>
      </section>
      <section className="CheckInTabSection">
        <CheckInTab />
      </section>
    </div>
  );
}

export default LandingPage;
