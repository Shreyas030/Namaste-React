import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return (
        <div className="about">
            <h1>About Us</h1>
            <h2>This is Namaste React Web Series</h2>
            {/* <User name={"Shreyas Function"} /> */}
            <UserClass  name={"Shreyas Class"}/>
        </div>

    )
}

export default About;