import Image from "./Image.jsx";

import Fry from "./images/Fry.jpg";
import Leela from "./images/Leela.jpg";
import Bender from "./images/Bender.jpg";
import Farnsworth from "./images/Farnsworth.jpg";
import Hermes from "./images/Hermes.jpg";
import Zoidberg from "./images/Zoidberg.jpg";
import Amy from "./images/Amy.jpg";
import Zapp from "./images/Zapp.jpg";
import Kif from "./images/Kif.jpg";
import Nibbler from "./images/Nibbler.jpg";

import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Futurama Characters</h1>

      <div className="character-grid">
        <Image source={Fry} width={150} name="Philip J. Fry (Fry)" role="Intergalactic Delivery Worker - Planet Express" />
        <Image source={Leela} width={150} name="Turanga Leela (Leela)" role="Captain & Pilot - Planet Express" />
        <Image source={Bender} width={150} name="Bender Bending Rodríguez (Bender)" role="Planet Express Worker" />
        <Image source={Farnsworth} width={150} name="Hubert J. Farnsworth (Professor Farnsworth)" role="Scientist, CEO and Owner - Planet Express" />
        <Image source={Hermes} width={150} name="Hermes Conrad (Hermes)" role="Bureaucrat & Accountant - Planet Express" />
        <Image source={Zoidberg} width={150} name="John Zoidberg (Dr. Zoidberg)" role="Doctor - Planet Express" />
        <Image source={Amy} width={150} name="Amy Wong" role="Intern - Planet Express" />
        <Image source={Zapp} width={150} name="Zapp Brannigan" role="General - Democratic Order of Planets, Captain - Nimbus" />
        <Image source={Kif} width={150} name="Kif Kroker (Kif)" role="Lieutenant - Democratic Order of Planets, Lieutenant - Nimbus" />
        <Image source={Nibbler} width={150} name="Lord Nibbler (Nibbler)" role="Ambassador to Earth, Dark Matter Source - Planet Express" />
      </div>
    </div>
  );
}

export default App;