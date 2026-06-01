import SiteShell from "../../components/site-shell";

export const metadata = {
  title: "Tutorials & References | ECE 196",
};

const tutorials = [
  {
    title: "ESP32 Database Integration",
    description:
      "Learn how to configure your PCB to read and write data to/from a cloud database that you can then connect to a web or mobile app.",
    href: "https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html",
  },
  {
    title: "Reducing noise in VL53L1X distance data",
    description:
      "Learn how to use the VL53L1X time-of-flight sensor to get accurate distance measurements and filter out noise from real-world conditions.",
    href: "https://learn.adafruit.com/adafruit-vl53l1x/arduino",
  },
  {
    title: "Physics behind a time-of-flight distance sensor",
    description:
      "Understand the underlying principles of how time-of-flight sensors work and their applications in distance measurement.",
    href: "https://firebase.google.com/docs/database/web/start",
  },
];

const references = [
  {
    title: "ESP32: Getting Started with Firebase (Realtime Database)",
    description:
      "Included basics of setting up a firebase realtime database and connecting it to an ESP32 microcontroller and gave starter code for reading/writing data.",
    href: "https://randomnerdtutorials.com/esp32-firebase-realtime-database/",
  },
  {
    title: "Physical Computing Lesson 1: Smoothing Input",
    description:
      "This tutorial from the ECE 196 course website covers techniques for smoothing input data from sensors, which is relevant for our project to ensure accurate occupancy detection.",
    href: "https://makeabilitylab.github.io/physcomp/advancedio/smoothing-input.html?utm_source=chatgpt.com"
  },
  {
    title: "RoboJax: Arduino code for VL53L1X Time-of-Flight 400cm Laser distance sensor",
    description:
      "This tutorial provides Arduino code for interfacing with the VL53L1X time-of-flight sensor, useful for our parking occupancy detection project.",
    href: "https://www.youtube.com/watch?v=Sc_iVfeocvg&t=734s"
  }
];

export default function TutorialsPage() {
  return (
    <SiteShell>
      <main className="page-stack">

        <section className="content-card">
          <div className="section-heading">
            <p className="section-tag">Tutorials</p>
            <h2>Tutorials by us!</h2>
          </div>
          <div className="resource-grid">
            {tutorials.map((tutorial) => (
              <article className="resource-card" key={tutorial.title}>
                <h3>{tutorial.title}</h3>
                <p>{tutorial.description}</p>
                <a
                  className="button button-secondary"
                  href={tutorial.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open tutorial
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="content-card">
          <div className="section-heading">
            <p className="section-tag">References</p>
            <h2>References</h2>
          </div>
          <div className="reference-list">
            {references.map((reference) => (
              <article className="reference-card" key={reference.title}>
                <h3>{reference.title}</h3>
                <p>{reference.description}</p>
                <a
                  className="button button-secondary"
                  href={reference.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open reference
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
