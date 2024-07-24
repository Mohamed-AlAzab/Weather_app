import "./index.css";
import logo from "./Photo/information-image-1.png";

const image = () => {
  return (
    <div className="image">
      <img src={logo} alt="logo" width="630" height="850" />
    </div>
  );
};

export default image;
