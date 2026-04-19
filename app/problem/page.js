import SiteShell from "../../components/site-shell";

export const metadata = {
  title: "Problem Page | ECE 196",
};

export default function ProblemPage() {
  return (
    <SiteShell>
      <main className="page-stack">
        <section className="content-card">
          <div className="section-heading">
            <p className="section-tag">Problem Definition</p>
            <h2>
            UCSD undergrad commuters struggle to know if student parking is available at Pangea parking structure during the afternoon time. 
            </h2>
          </div>
        </section>

        <section className="content-card">
          <div className="section-heading">
            <p className="section-tag">Problem Motivation</p>
            <h2>Why this matters to the team</h2>
          </div>
          <p>
            Anthony and Alex consistently park at Pangea parking structure and have to continuously circle around looking for open S spots, causing us to waste time or be late to class. As a last resort, we may have to park in Student-Resident spots, risking a $85 ticket. 
          </p>
        </section>

        <section className="content-card">
          <div className="section-heading">
            <p className="section-tag">Current Existing Solutions</p>
            <h2>How people currently navigate the problem</h2>
          </div>
          <div className="solutions-grid">
            <article className="solution-card">
              <h3>Sensor Surveillence System</h3>

              <div className="card-image">
                <img
                  src="/SolutionPhotos/SensorSystemSol1.png"
                  alt="Sensor System"
                />
                <a
                  href="https://arxiv.org/abs/1712.02741"
                  target="_blank"
                  rel="noreferrer"
                >
                  Reference: Parking Sensing and Information System: Sensors,
                  Deployment, and Evaluation
                </a>
              </div>

              <p>
                Have a surveillance system implemented with sensors that&apos;s
                monitoring the parking and updates cloud recent about the
                availability of parking which in turn updates on the app to
                notify users.
              </p>
              <ul>
                <li>Pros: Safe, hidden, and up-to-date information</li>
                <li>Cons: Cost and installing sensors on all parking</li>
              </ul>
            </article>

            <article className="solution-card">
              <h3>Computer Vision/AI Surveillence System</h3>

              <div className="card-image">
                <img src="/SolutionPhotos/Camera-AISystemSol2.png" alt="Camera" />
                <a
                  href="https://www.viziosense.com/post/from-lab-to-parking-lot-the-real-engineering-behind-smart-parking?utm_source=chatgpt.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Reference: From Lab to Parking Lot: The Real Engineering Behind
                  Smart Parking
                </a>
              </div>

              <p>
                Hidden surveillance camera where the AI process the parking space
                info to be sent back to cloud/server. This in turn notifies the
                users or customers.
              </p>
              <ul>
                <li>
                  Pros: Less devices required, safety, can aid with fining
                  violations, and up-to-date information
                </li>
                <li>
                  Cons: Computation Cost &amp; Accuracy (Sensitive to unexpected
                  environments like rain)
                </li>
              </ul>
            </article>

            <article className="solution-card">
              <h3>Automated Parking Garage</h3>

              <div className="card-image">
                <img
                  src="/SolutionPhotos/IntegratedParkingDesign3.jpg"
                  alt="Parking Garage"
                />
                <a
                  href="https://www.archdaily.com/942979/fully-automated-parking-solutions-space-saving-systems-with-superior-user-experience"
                  target="_blank"
                  rel="noreferrer"
                >
                  Reference: Fully Automated Parking Solutions: Space-saving
                  systems with superior user experience
                </a>
              </div>

              <p>
                Optimizes space to design a smart parking garage from an
                electro-mechanical system that sort your cars like toys and able
                to control or notified with an app.
              </p>
              <ul>
                <li>
                  Pros: Efficiency, Occupy less space, Accurate, and Accessible
                </li>
                <li>Cons: Safety, Cost to build, and Time</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
