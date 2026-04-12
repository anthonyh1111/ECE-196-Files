import SiteShell from "../../components/site-shell";

export const metadata = {
  title: "Team Page | ECE 196",
};

const members = [
  {
    name: "Alex Vong",
    role: "4th Year Computer Engineering Major",
    image: "/TeamPhotos/AlexVong.JPG",
    description:
      "Stronger software background in areas such as web developement, machine learning, and data analysis. Looking forward to getting some more hands on hardware experience and embedded systems experience.",
  },
  {
    name: "Anthony Huynh",
    role: "2nd Year Transfer Computer Engineering Major",
    image: "/TeamPhotos/anthony.jpeg",
    description:
      "I am hoping to contribute my knowledge of industry style coding and electrical work to solve relevant problems. I have a good background in microcontroller communication, signal processing, and real-world machinery.",
  },
  {
    name: "Paul Zhao",
    role: "2nd Year Computer Engineer Major",
    image: "/TeamPhotos/PaulZhao.jpg",
    description:
      "Open to learn with experience with CAD, machine learning, Matlab/Python coding, and signal processing. I would like to gain more experience with AI, Computer Vision, PCB, and other hands-on or hardware experiences.",
  },
];

export default function TeamPage() {
  return (
    <SiteShell>
      <main className="page-stack">
        <section className="team-grid">
          {members.map((member) => (
            <article className="member-card" key={member.name}>
              <div className="member-photo">
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p>{member.description}</p>
            </article>
          ))}
        </section>
      </main>
    </SiteShell>
  );
}
