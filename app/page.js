import Link from "next/link";
import SiteShell from "../components/site-shell";

export default function HomePage() {
  return (
    <SiteShell>
      <main>
        <section className="page-header">
          <p className="eyebrow">Home Page</p>
          <h1>Welcome to our ECE196 Project!</h1>
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
      </main>
    </SiteShell>
  );
}
