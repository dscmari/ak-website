import "/src/css/home.css";

export default function Home() {
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
        <h2>Sub-Überschrift</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          nemo laudantium magnam in ex facilis repellendus, delectus eos at cum
          laborum animi quasi asperiores reiciendis voluptates necessitatibus.
          Harum, iusto perferendis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nemo
          molestias perspiciatis consequuntur blanditiis. Dicta consequatur
          consectetur animi natus nobis fuga ea, cum doloribus voluptatibus vel
          a deserunt quibusdam eveniet!
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nemo
          molestias perspiciatis consequuntur blanditiis. Dicta consequatur
          consectetur animi natus nobis fuga ea, cum doloribus voluptatibus vel
          a deserunt quibusdam eveniet!
        </p>
      </div>
    </div>
  );
}
