import { useState } from "react";
import "/src/css/home.css";

export default function Home() {

  const [showText, setShowText] = useState(false)

  const handleClick = () => {

    console.log(showText)
    setShowText(!showText)
  }

  return (
    <div className="home-container">
      <div className="img-text-area">
        <div className="portrait-container">
          <img
            className="portrait"
            src="./src/assets/monkey.jpg"
            alt="Ann-Kathrin Kraus"
          />
          <p>Portrait, am besten mit Luna, Beschreibung kurzer Text, etwa 1-2 Sätze.</p>
        </div>
        <div className="headline-container text-container">
          <h1>Überschrift</h1>
          <p>
            <span className="underline-span"></span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, nemo laudantium magnam in ex facilis repellendus,
            delectus eos at cum laborum animi quasi asperiores reiciendis
            voluptates necessitatibus. Harum, iusto perferendis?
          </p>
          <p>
            <span className="underline-span"></span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, nemo laudantium magnam in ex facilis repellendus,
            delectus eos at cum laborum animi quasi asperiores reiciendis
            voluptates necessitatibus. Harum, iusto perferendis?
          </p>
        </div>
      </div>
      <div className="text-container">
        <h2 onClick={handleClick}>Sub-Überschrift &#9660;</h2>
        <p className={`paragraph ${showText ? 'visible' : ''}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          nemo laudantium magnam in ex facilis repellendus, delectus eos at cum
          laborum animi quasi asperiores reiciendis voluptates necessitatibus.
          Harum, iusto perferendis?
        </p>
      </div>
      <div className="text-container">
        <h2>Sub-Überschrift</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          nemo laudantium magnam in ex facilis repellendus, delectus eos at cum
          laborum animi quasi asperiores reiciendis voluptates necessitatibus.
          Harum, iusto perferendis?
        </p>
      </div>
    </div>
  );
}
