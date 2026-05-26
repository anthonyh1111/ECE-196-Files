import Link from "next/link";
import SiteShell from "../components/site-shell";

export default function HomePage() {
  return (
    <SiteShell>
      <main className="page-stack">
        <section className="page-header">
          <p className="eyebrow">Home Page</p>
          <h1>ECE196 Smart Parking System Project</h1>
          <p className="lead">Alex Vong, Anthony Huynh, Paul Zhao</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/problem">
              View the problem
            </Link>
            <Link className="button button-secondary" href="/team">
              Meet the team
            </Link>
          </div>
        </section>

        <section className="content-card">
          <div className="section-heading">
            <p className="section-tag">The Problem</p>
            <h2>Finding parking on campus is frustrating and time-consuming</h2>
          </div>
          <p>
            UCSD students frequently waste time circling parking
            garages without knowing which spots are actually available. There is
            no real-time visibility into occupancy, forcing drivers to search
            floor by floor and contributing to unnecessary congestion and
            emissions.
          </p>
          <div className="hero-actions">
            <Link className="button button-secondary" href="/problem">
              Learn more about the problem
            </Link>
          </div>
        </section>

        <section className="content-card">
          <div className="section-heading">
            <p className="section-tag">Our Solution</p>
            <h2>A real-time parking occupancy detection and notification system</h2>
          </div>
          <p>
            We built a low-cost sensor system using time-of-flight distance
            sensors and an ESP32 microcontroller to detect whether each parking
            spot is occupied. Occupancy data is pushed to a Firebase database
            and surfaced to users via a web or mobile interface, so drivers know
            exactly where to go before they even enter the garage.
          </p>
          <div className="hero-actions">
            <Link className="button button-secondary" href="/solution">
              See the solution
            </Link>
          </div>
        </section>

        <section className="content-card">
          <div className="section-heading">
            <p className="section-tag">Project Demo</p>
            <h2>Video demo placeholder</h2>
          </div>
          <div className="placeholder-figure">
            <div>
              <h3>Video ideas document</h3>
              <p>
                Open the shared planning doc for demo ideas and video structure.
              </p>
              <div className="hero-actions centered-actions">
                <a
                  className="button button-primary"
                  href="https://docs.google.com/document/d/1Mh3toYE-9V56sv-izEsubGuJz7E74g70UgYrZhKT3jQ/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Video Ideas
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="content-card">
          <div className="section-heading">
            <p className="section-tag">Project Poster</p>
            <h2>Poster placeholder</h2>
          </div>
          <div className="placeholder-figure">
            <div>
              <h3>Poster presentation deck</h3>
              <p>
                Open the shared presentation link for the project poster.
              </p>
              <div className="hero-actions centered-actions">
                <a
                  className="button button-primary"
                  href="https://docs.google.com/presentation/d/1lXJGQrG5ImQTNh_mPFVS6rdqNX5QzuL0o0tcB4y84Qs/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Poster Ideas
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
