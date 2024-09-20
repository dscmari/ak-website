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
    {
      title: "Sub-überschrift 3",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,nemo laudantium magnam in ex facilis repellendus, delectus eos at cumaborum animi quasi asperiores reiciendis voluptates necessitatibus.Harum, iusto perferendis?",
    }
  ];

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle den Abschnitt
  };

  return (
    <div className="md:pt-12">
      <div className="md:grid grid-cols-2 md:m-8 md:mt-0 md:opacity-90">
        <div className="flex flex-col md:bg-secondary md:p-8">
          <img src={monkeyImage} alt="Ann-Kathrin Kraus" style={{height: '300px', width:'auto', objectFit: 'cover'}} />
          <p className="p-4 md:px-0">
            Portrait, am besten mit Luna, Beschreibung kurzer Text, etwa 1-2
            Sätze.
          </p>
        </div>
        <div className="md:flex flex-col justify-center gap-4 text-container m-4 md:m-0 p-4 md:border-l-2 border-primary bg-secondary">
          <h1 className="text-4xl mb-4 text-center">Überschrift</h1>
          <p className="ml-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, nemo laudantium magnam in ex facilis repellendus,
            delectus eos at cum laborum animi quasi asperiores reiciendis
            voluptates necessitatibus. Harum, iusto perferendis?
          </p>
          <p className="ml-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, nemo laudantium magnam in ex facilis repellendus,
            delectus eos at cum laborum animi quasi asperiores reiciendis
            voluptates necessitatibus. Harum, iusto perferendis?
          </p>
        </div>
      </div>
      {sections.map((section, index) => (
        <div key={index} className="text-container bg-secondary m-4 md:m-8 p-4 cursor-pointer md:opacity-90 hover:bg-slate-200" onClick={() => handleClick(index)}>
          <div className="flex justify-center md:justify-start items-center pl-4">
            <h2 className="md:pl-10 text-xl font-semibold">{section.title}</h2>
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
          <p className={`paragraph md:ml-10 ${openIndex === index ? "visible" : ""}`}>
            {section.content}
          </p>
        </div>
      ))}

    </div>
  );
}
