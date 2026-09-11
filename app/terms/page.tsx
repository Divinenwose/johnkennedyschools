import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { schoolConfig } from '@/config/school-config';

export const metadata: Metadata = {
  title: 'Terms of Use | John Kennedy International Schools',
  description: 'Terms for using the John Kennedy International Schools website.',
};

export default function TermsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Use"
        description="The terms that apply when you use the John Kennedy International Schools website."
      />

      <section className="py-16 md:py-24 bg-ivory-100">
        <Container>
          <article className="max-w-3xl mx-auto space-y-10 text-charcoal-700 leading-relaxed">
            <p className="text-sm text-charcoal-600">Last updated: September 11, 2026</p>

            <section className="space-y-3">
              <h2 className="font-display text-2xl text-navy-950">Using this website</h2>
              <p>
                This website provides general information about {schoolConfig.name}, its sections,
                admissions process, school life, and contact details. You agree to use the website
                lawfully and respectfully.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl text-navy-950">Website content</h2>
              <p>
                We work to keep the information on this website accurate and current, but details
                such as dates, fees, programmes, availability, and announcements may change without
                notice. Please contact the school to confirm information before making decisions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl text-navy-950">Intellectual property</h2>
              <p>
                The text, branding, images, and other content on this website belong to or are used
                by {schoolConfig.name} unless otherwise stated. You may view the website for personal
                and non-commercial purposes, but you may not reproduce or redistribute its content
                without permission.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl text-navy-950">External links</h2>
              <p>
                Links to external websites are provided for convenience. We do not control those
                websites and are not responsible for their content, availability, or policies.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl text-navy-950">Contact</h2>
              <p>
                Questions about these terms can be sent to{' '}
                <a className="text-gold-700 underline underline-offset-4" href={`mailto:${schoolConfig.contact.email}`}>
                  {schoolConfig.contact.email}
                </a>.
              </p>
            </section>
          </article>
        </Container>
      </section>
    </main>
  );
}
