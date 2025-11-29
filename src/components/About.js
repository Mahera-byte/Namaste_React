import User from "./User.js";
import UserClass from "./UserClass.js";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is about page</h2>
      <User name={"Mahera"} />
      <UserClass name={"Mahera"} location={"Patna"} />
    </div>
  );
};

export default About;
