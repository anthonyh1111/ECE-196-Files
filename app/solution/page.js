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
  {
    title: "Assembled PCB",
    src: "/SolutionPhotos/AssembledPCB.png",
    alt: "Assembled PCB for the smart parking system",
    description: "Physical assembled PCB with components soldered onto the board.",
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
            <p className="section-tag">Testable Hypothesis</p>
            <h2>Our system detects parking spot changes and notifies users through the mobile app within 15 seconds.</h2>
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
            <p className="section-tag">Block Diagram Of Technology</p>
            <h2>Overall system architecture</h2>
          </div>
          <div className="solution-figure block-diagram-figure">
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
            <p className="section-tag">PCB Section</p>
          </div>
          <div className="page-stack">
            {pcbFigures.map((figure) => (
              <div key={figure.title}>
                <h3>{figure.title}</h3>
                <div
                  className={`solution-figure pcb-figure${
                    figure.title === "PCB design" ? " pcb-figure-design" : ""
                  }${
                    figure.title === "Assembled PCB"
                      ? " assembled-pcb-figure"
                      : ""
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
            <p className="section-tag">Software Block Diagram</p>
            <h2>Software system architecture</h2>
          </div>
          <div className="solution-figure">
            <img
              src="/SolutionPhotos/SoftwareBlockDiagram.png"
              alt="Software block diagram showing how the smart parking system app, database, ESP32 updates, and notification logic connect"
            />
          </div>
          <p className="figure-note">
            Software block diagram showing the data flow between the parking
            system hardware, Firebase database, mobile app, and notification
            logic.
          </p>
        </section>
        <section className="content-card">
          <div className="section-heading">
            <p className="section-tag">Final Product</p>
            <h2>Completed smart parking system</h2>
          </div>
          <div className="solution-figure final-model-figure">
            <img
              src="/SolutionPhotos/FullModel.jpg"
              alt="Completed smart parking system model with the garage, sensors, and electronics installed"
            />
          </div>
          <p className="figure-note">
            Completed parking garage model with the sensing and control hardware
            integrated into the physical system.
          </p>
          <div className="final-product-grid">
            <div>
              <h3>Mounted PCB sensor</h3>
              <div className="solution-figure final-product-figure">
                <img
                  src="/SolutionPhotos/PCBSensor.jpg"
                  alt="PCB sensor mounted inside the completed smart parking system"
                />
              </div>
            </div>
            <div>
              <h3>Final PCB</h3>
              <div className="solution-figure final-product-figure">
                <img
                  src="/SolutionPhotos/FinalPCB.jpg"
                  alt="Final PCB used in the completed smart parking system"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
