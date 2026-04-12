import SiteHeader from "./site-header";

export default function SiteShell({ children }) {
  return (
    <div className="site-shell">
      <SiteHeader />
      {children}
    </div>
  );
}
