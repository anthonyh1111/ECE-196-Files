import SiteShell from "../../components/site-shell";

export const metadata = {
  title: "Solution Page | ECE 196",
};

const solutionActions = [
  "Use a time of flight distance sensors to detect if a car is in a parking spot.",
  "Microcontroller/ESP32 will be used to communicate with our database and notify users via Discord or Telegram.",
  "Firebase will be our database to keep track of parking spots status.",
];

const technicalAspects = [
  "A microcontroller collects occupancy data from the sensing hardware and packages it for processing.",
  "Communication hardware transfers occupancy updates from the microcontroller to a server or dashboard layer.",
  "The software stack stores current space status and notifies users with near real-time data.",
];

const components = [
  "Microcontroller: ESP32",
  "Distance Sensors: Using time of flight sensors vl53L1X to detect distance",
  "Communication interface: Wi-Fi, Bluetooth",
  "Software layer: dashboard, mobile view, or web interface that displays open-space availability.",
];

const pcbFigures = [
  {
    title: "PCB schematic",
    src: "/SolutionPhotos/PCBSchem.png",
    alt: "PCB schematic for the smart parking system",
    description: "Circuit schematic for the PCB design.",
  },
  {
    title: "PCB design",
    src: "/SolutionPhotos/PCBDesign.png",
    alt: "PCB layout design for the smart parking system",
    description: "Board layout showing the PCB routing and component placement.",
  },
  {
    title: "PCB 3D view",
    src: "/SolutionPhotos/PCB3D.png",
    alt: "3D view of the PCB for the smart parking system",
    description: "Three-dimensional render of the completed PCB.",
  },
];

export default function SolutionPage() {
  return (
    <SiteShell>
      <main className="page-stack">
        <section className="content-card">
          <div className="section-heading">
            <p className="section-tag">Your Solution</p>
            <h2> Real-Time undergraduate student parking occupancy detection system. </h2>
          </div>
        </section>

        <section className="content-card">
          <div className="section-heading">
            <p className="section-tag">Solution Sketch</p>
          </div>
          <div className="solution-figure model-figure">
            <img
              src="/SolutionPhotos/Model.png"
              alt="Model for the smart parking garage system"
            />
          </div>
          <p className="figure-note">
            Draft sketch of the smart parking solution layout and how the major
            hardware pieces fit together.
          </p>
        </section>

        <section className="content-card">
          <div className="section-heading">
            <p className="section-tag">What The Technology Will Do</p>
            <h2>Solution behavior</h2>
          </div>
          <div className="solution-figure">
            <img
              src="/SolutionPhotos/ExampleWorkflow.png"
              alt="Example workflow showing how the smart parking system detects occupancy and notifies users"
            />
          </div>
          <p className="figure-note">
            Example workflow illustrating how sensor data flows from detection
            through the microcontroller and database to user notification.
          </p>
        </section>

        <section className="content-card">
          <div className="section-heading">
            <p className="section-tag">Technological Aspects</p>
            <h2>Key technical elements of the design</h2>
          </div>
          <ul className="detail-list">
            {technicalAspects.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mini-grid">
            {components.map((item) => (
              <article className="mini-card" key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-card">
          <div className="section-heading">
            <p className="section-tag">Block Diagram Of Technology</p>
            <h2>Overall system architecture</h2>
          </div>
          <div className="solution-figure">
            <img
              src="/SolutionPhotos/BlockDiagram.png"
              alt="Smart parking garage block diagram with sensors, ESP32, Firebase, and notification software"
            />
          </div>
          <p className="figure-note">
            Overall solution block diagram showing the model parking garage,
            distance sensors, ESP32 microcontroller, Firebase database, and
            Discord or Telegram notifications.
          </p>
        </section>

        <section className="content-card">
          <div className="section-heading">
            <p className="section-tag">CAD Design</p>
            <h2>Parking Garage CAD Model</h2>
          </div>
          <div className="placeholder-figure">
              <img
                src="/SolutionPhotos/Model3DCAD.png"
                alt="CAD model for the smart parking garage system"
                className="section-image"
              />
            </div>
        </section>

        <section className="content-card">
          <div className="section-heading">
            <p className="section-tag">App View</p>
            <h2>Mobile app interface</h2>
          </div>
          <div className="solution-figure app-view-figure">
            <img
              src="/SolutionPhotos/AppView.png"
              alt="Mobile app interface showing real-time parking spot availability"
            />
          </div>
          <p className="figure-note">
            The mobile app displays live occupancy status for each parking spot,
            updated in real time from the Firebase database.
          </p>
        </section>

        <section className="content-card">
          <div className="section-heading">
            <p className="section-tag">PCB Section</p>
          </div>
          <div className="page-stack">
            {pcbFigures.map((figure) => (
              <div key={figure.title}>
                <h3>{figure.title}</h3>
                <div
                  className={`solution-figure pcb-figure${
                    figure.title === "PCB design" ? " pcb-figure-design" : ""
                  }`}
                >
                  <img src={figure.src} alt={figure.alt} />
                </div>
                <p className="figure-note">{figure.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="content-card">
          <div className="section-heading">
            <p className="section-tag">Final Product</p>
            <h2>Completed smart parking system</h2>
          </div>
          <div className="placeholder-figure">
            <div>
              <h3>Final product photos coming soon</h3>
              <p>
                Photos and a description of the assembled parking garage model,
                mounted sensors, and working system will be added here.
              </p>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
