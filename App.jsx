import Navbar from "./components/Navbar"
import Hero from "./components/hero"
import Home from "./components/Home";
import HomeCards from "./components/HomeCards"  
import LoginPanel from "./components/LoginPanel";
import StudentRegistration from "./components/Student/StudentRegistration";

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <HomeCards/>
      <Home/> 

      <LoginPanel/>

      {/* <StudentRegistration/> */}
      
    </>
  )
}

export default App