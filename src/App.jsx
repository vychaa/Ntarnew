import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Aboutus from "./pages/Aboutus/Aboutus";
import Help from "./components/Help/Help";
import ContactPage from "./pages/Contact/ContactPage";
import Privacypolisymenu from "./pages/privacypolicy/Privacypolisymenu";
// import Termfaqsection from "./pages/Terms&Condition/Termfaqsection";
import Termmenu from "./pages/Terms&Condition/Termmenu";
import Faqsection from "./pages/privacypolicy/Faqsection";
import TermsCondfaq from "./pages/Terms&Condition/Termscondfaq";
import RentalFaq from "./pages/Terms&Condition/RentalFaq";
import Rechargebillfaq from "./pages/Terms&Condition/Rechargebillfaq";
import Goldsavingfaq from "./pages/Terms&Condition/Goldsavingfaq";
import Creditcardfaq from "./pages/Terms&Condition/Creditcardfaq";
import Helpmenu from "./pages/Helpus/Helpmenu";
import Helpfaq from "./pages/Helpus/Helpfaq";
import Pots from "./components/Pots/Pots";
import Club from "./components/Club/Club";
import Mobnav from "./components/Mobnav";
import Ntarpay from "./pages/Ntarpay/Ntarpay";
import Bbpscroll from "./pages/Ntarpay/Bbpscroll";
import Education from "./pages/Educationsection/Education";
import Comingsoon from "./pages/Comingsoon/Comingsoon";
import Shutter from "./components/Shutter/Shutter";
import Headernew from "./components/Headernew/Headernew";
import Homebluecont from "./components/Homebluecont/Homebluecont";
import Homesec3 from "./components/Homesec3/Homesec3";
// import  './app.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/Termmenu" element={<Termmenu />} />
        <Route path="/Faqsection" element={<Faqsection />} />
        <Route path="/TermsCondfaq" element={<TermsCondfaq />} />
        <Route path="/RentalFaq" element={<RentalFaq />} />
        <Route path="/Privacypolisymenu" element={<Privacypolisymenu />} />
        <Route path="/Rechargebillfaq" element={<Rechargebillfaq />} />
        <Route path="/Creditcardfaq" element={<Creditcardfaq />} />
        <Route path="/Goldsavingfaq" element={<Goldsavingfaq />} />
        <Route path="/Helpmenu" element={<Helpmenu />} />
        <Route path="/Helpfaq" element={<Helpfaq />} />

        <Route path="/Ntarpay" element={<Ntarpay />} />
        <Route path="/Bbpscroll" element={<Bbpscroll />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Shutter" element={<Shutter />} />
        <Route path="/Comingsoon" element={<Comingsoon />} />

        <Route path="/Headernew" element={<Headernew />} />
        <Route path="/Mobnav" element={<Mobnav />} />

        {/* <Route path="/termfaqsection" element={<Termfaqsection />} />  */}
        {/* <Route path="/" element={<Helpmenu />} /> */}
        {/* <Route path="/" element={<Faqsection />} /> */}
        {/* <Route path="/" element={<Helpfaq />} /> */}
        {/* <Route path="/" element={<Club />} /> */}
        {/* <Route path="/" element={<Pots />} /> */}
        {/* <Route path="/" element={<Comingsoon />} />  */}
        {/* <Route path="/" element={<Homebluecont />} /> */}
        {/* <Route path="/" element={<Homesec3 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
