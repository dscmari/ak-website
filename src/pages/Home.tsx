import { useState } from "react";
import "/src/css/home.css";
import monkeyImage from "../assets/monkey.jpg";
import keybordArrowDown from "../assets/keybord-arrow-down.svg";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const sections = [
    {
      title: "Sub-überschrift 1",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,nemo laudantium magnam in ex facilis repellendus, delectus eos at cumaborum animi quasi asperiores reiciendis voluptates necessitatibus.Harum, iusto perferendis?",
    },
    {
      title: "Sub-überschrift 2",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,nemo laudantium magnam in ex facilis repellendus, delectus eos at cumaborum animi quasi asperiores reiciendis voluptates necessitatibus.Harum, iusto perferendis?",
    },
  ];

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle den Abschnitt
  };

  return (
    <div className="home-container">
      <div className="img-text-area">
        <div className="portrait-container">
          <img className="portrait" src={monkeyImage} alt="Ann-Kathrin Kraus" />
          <p>
            Portrait, am besten mit Luna, Beschreibung kurzer Text, etwa 1-2
            Sätze.
          </p>
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
      {sections.map((section, index) => (
        <div key={index} className="text-container cursor-pointer" onClick={() => handleClick(index)}>
          <div className="flex items-center pl-4">
            <h2 className="pl-10 text-xl font-semibold">{section.title}</h2>
            <div className="mt-1">
              <img
                className={`w-12 h-12 transition-transform duration-500 ${
                  openIndex === index ? "transform scale-y-[-1]" : ""
                }`}
                src={keybordArrowDown}
                alt="Tastatur Pfeil nach unten"
              />
            </div>
          </div>
          <p className={`paragraph ${openIndex === index ? "visible" : ""}`}>
            {section.content}
          </p>
        </div>
      ))}

    </div>
  );
}
