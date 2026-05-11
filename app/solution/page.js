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

const milestones = [
  {
    date: "May 11, 2026",
    item: "Parking garage CAD model should be finished and ready to print",
  },
  {
    date: "May 18, 2026",
    item: "PCB should be fully assembled and ready to be coded",
  },
  {
    date: "May 22, 2026",
    item: "App should be fully implemented and update users on open parking spots",
  },
  {
    date: "May 29, 2026",
    item: "Video demo should be recorded and edited, and poster should be finalized for presentation",
  }
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
            <h2>Real-time parking occupancy dectection system for Pangea parking structure</h2>
          </div>
        </section>

        <section className="content-card">
          <div className="section-heading">
            <p className="section-tag">Solution Sketch</p>
          </div>
          <div className="solution-figure">
            <img
              src="/SolutionPhotos/ConceptSketch.png"
              alt="Solution sketch for the smart parking garage system"
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
          <ul className="detail-list">
            {solutionActions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
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
            <p className="section-tag">Milestones</p>
            <h2>Specific dates tied to measurable outcomes</h2>
          </div>
          <div className="milestone-list">
            {milestones.map((milestone) => (
              <article className="milestone-card" key={milestone.date}>
                <p className="milestone-date">{milestone.date}</p>
                <p>{milestone.item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-card">
          <div className="section-heading">
            <p className="section-tag">Figure Of Timeline</p>
            <h2>Project timeline</h2>
          </div>
          <div className="solution-figure">
            <img
              src="/SolutionPhotos/TimelineFigure.png"
              alt="Project timeline showing milestones on May 1, May 8, and May 20, 2026"
            />
          </div>
          <p className="figure-note">
            Timeline of garage-model construction, distance sensor detection with
            microcontroller communication, and user notification of open spots.
          </p>
        </section>

        <section className="content-card">
          <div className="section-heading">
            <p className="section-tag">CAD Design</p>
            <h2>Parking garage CAD placeholder</h2>
          </div>
          <div className="placeholder-figure">
              <img
                src="/SolutionPhotos/CADModel-Parking_Garage.png"
                alt="CAD model for the smart parking garage system"
                className="section-image"
              />
            </div>
        </section>

        <section className="content-card">
          <div className="section-heading">
            <p className="section-tag">PCB Section</p>
          </div>
          <div className="page-stack">
            {pcbFigures.map((figure) => (
              <div key={figure.title}>
                <h3>{figure.title}</h3>
                <div className="solution-figure">
                  <img src={figure.src} alt={figure.alt} />
                </div>
                <p className="figure-note">{figure.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
