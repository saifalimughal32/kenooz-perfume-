import SiteLayout from "@/components/layout/SiteLayout";
import PageHeader from "@/components/layout/PageHeader";

const Stub = ({ title, breadcrumb, blurb }: { title: string; breadcrumb: string; blurb: string }) => (
  <SiteLayout>
    <PageHeader title={title} breadcrumb={breadcrumb} />
    <section className="py-24">
      <div className="container-luxury max-w-3xl text-center">
        <p className="label-gold mb-4">Coming in the next iteration</p>
        <p className="text-foreground/70 leading-relaxed">{blurb}</p>
      </div>
    </section>
  </SiteLayout>
);


export const ScentFinderPage = () => (
  <Stub
    title="Scent Finder Quiz"
    breadcrumb="Scent Finder"
    blurb="Interactive quiz that recommends fragrance families based on your brand's profile — coming next phase."
  />
);

export const BlogPage = () => (
  <Stub
    title="Knowledge Hub"
    breadcrumb="Blog"
    blurb="How perfumes are made, fragrance notes guides, industry trends and branding tips — coming with the CMS in phase 4."
  />
);
