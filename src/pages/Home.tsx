import { useState } from "react";
import "/src/css/home.css";
import monkeyImage from "../assets/monkey.jpg";
import keybordArrowDown from "../assets/keybord-arrow-down.svg";
import "/src/css/polaroid.css";

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
    },
  ];

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle den Abschnitt
  };

  return (
    <div className="home-container">
      <div className="flex flex-col lg:flex-row lg:flex-row-reverse lg:gap-8 items-center lg:pt-8">
        <div className="polaroid lg:w-1/2">
          <img src={monkeyImage} alt="Ann-Kathrin Kraus" />
          <div className="caption">Your Caption Here</div>
        </div>
        <div className="text-container lg:w-1/2 mx-4 lg:ml-8 p-4 bg-white border-8">
          <h2 className="pb-2">Name AK</h2>
          <h3 className="font-sans">Psychologische Psychotherapeutin usw.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
            fugit ipsum dolorem laboriosam doloribus quibusdam, quam, voluptates
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
            fugit ipsum dolorem laboriosam doloribus quibusdam, quam, voluptates
          </p>
        </div>
      </div>

      <div className="py-4 my-4 contact-info">
        <div className="m-6 p-4 rounded-md bg-white">
          <h3 className="">Kontaktinfo</h3>
          <p>Kontaktdaten und Verweis auf Kontaktfeld</p>
        </div>
      </div>

      {sections.map((section, index) => (
        <div
          key={index}
          className="text-container bg-white m-4 lg:m-8 p-4 cursor-pointer border-8"
          onClick={() => handleClick(index)}
        >
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
          <p
            className={`paragraph md:ml-10 ${
              openIndex === index ? "visible" : ""
            }`}
          >
            {section.content}
          </p>
        </div>
      ))}
    </div>
    /*
    <div className="md:pt-12">
      <div className="md:grid grid-cols-2 md:m-8 md:mt-0">
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
        <div key={index} className="text-container bg-secondary m-4 md:m-8 p-4 cursor-pointer hover:bg-white" onClick={() => handleClick(index)}>
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

    </div> */
  );
}
