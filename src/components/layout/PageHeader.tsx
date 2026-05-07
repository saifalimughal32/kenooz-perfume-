import { Link } from "react-router-dom";

const PageHeader = ({ title, breadcrumb }: { title: string; breadcrumb: string }) => (
  <section className="relative pt-12 pb-20 border-b border-border bg-muted">
    <div className="container-luxury text-center">
      <h1 className="heading-display text-foreground">{title}</h1>
      <div className="gold-divider mt-6 mb-4" />
      <p className="text-sm text-muted-foreground tracking-wider">
        <Link to="/" className="hover:text-primary">Home</Link> / {breadcrumb}
      </p>
    </div>
  </section>
);

export default PageHeader;
