import { Outlet } from "react-router";
import About from "../components/About";
import Courses from "../components/Courses";

const Home = () => {
  return (
    <div className="p-3">
      {/* <About />
      <Courses /> */}
      <h1>Hoame Page</h1>

      {/* iç içe route kullanımında sayfaların çağırılacağı alana yazılır. */}
      <Outlet/>
    </div>
  );
};

export default Home;
