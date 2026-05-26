import SiteShell from "../../components/site-shell";

export const metadata = {
  title: "Progress | ECE 196",
};

const milestones = [
  {
    date: "May 4, 2026",
    item: [
      "Finish up brainstorming ideas for our pressure-pad based sensor and updating our website proposal.",
      "UPDATE: We ended up pivoting from this idea because it wasn't realistic to incorporate into modern parking garages. A pressure-pad based sensor would prove inefficient and would be incredibly difficult to implement.",
    ],
  },
  {
    date: "May 13, 2026",
    item: [
      "Our smaller parking garage model and sensor enclosure will be fully designed on CAD and 3D Printed. PCB will have been fully designed and ordered with improvements like portability and sensor compatibility.",
      "CHALLENGES: We ran into issues with the time it took to print the CAD model and sizing constraints as the plate wasn't large enough to fit the size of garage we needed. We compromised by printing out multiple pieces to a larger model.",
    ],
  },
  {
    date: "May 18, 2026",
    item: [
      "PCB Components will be soldered on and our parking garage will be 'decorated' with appropriate lanes for car parking, exterior colored, and have sensor mounting spaces.",
      "CHALLENGES: We incorrectly ordered some of the parts on the PCB and had to find replacement parts. Since the replacement parts weren't identical we had to jumper wire the connections.",
    ],
  },
  {
    date: "May 22, 2026",
    item: "The sensor enclosure will be mounted onto our smaller parking garage model. Sensor will now be in the testing stage and will account for noise, outside variables, and will work properly as a car sensor.",
  },
  {
    date: "May 25, 2026",
    item: "Sensor will be able to detect if a car is in a parking spot and update the Firebase database in real time. This data update will be reflected in the app by showing occupancy/availability for that spot.",
  },
  {
    date: "May 29, 2026",
    item: "Video demo will be recorded and edited, and poster should be finalized for presentation. The model, poster, and video will also be double checked for any changes that could be made to ensure the quality of our presentation.",
  },
];

export default function ProgressPage() {
  return (
    <SiteShell>
      <main className="page-stack">
        <section className="page-header">
          <p className="eyebrow">Progress</p>
          <h1>Project milestones and timeline</h1>
        </section>

        <section className="content-card">
          <div className="section-heading">
            <p className="section-tag">Milestones</p>
            <h2>Milestones</h2>
          </div>
          <div className="milestone-list">
            {milestones.map((milestone) => (
              <article className="milestone-card" key={milestone.date}>
                <p className="milestone-date">{milestone.date}</p>
                {Array.isArray(milestone.item) ? (
                  <ul className="milestone-points">
                    {milestone.item.map((point) => (
                      <li key={point}>{point.trim()}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{milestone.item}</p>
                )}
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
      </main>
    </SiteShell>
  );
}
