import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { schoolConfig } from '@/config/school-config';

export const metadata: Metadata = {
  title: 'Privacy Policy | John Kennedy International Schools',
  description: 'Learn how John Kennedy International Schools collects, uses, and protects personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="How John Kennedy International Schools handles information shared through this website."
      />

      <section className="py-16 md:py-24 bg-ivory-100">
        <Container>
          <article className="max-w-3xl mx-auto space-y-10 text-charcoal-700 leading-relaxed">
            <p className="text-sm text-charcoal-600">Last updated: September 11, 2026</p>

            <section className="space-y-3">
              <h2 className="font-display text-2xl text-navy-950">Information we collect</h2>
              <p>
                We may collect information you provide when you contact us or submit an enquiry,
                including your name, email address, phone number, selected section, and message.
              </p>
              <p>
                We may also receive basic technical information, such as browser and device details,
                when you use this website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl text-navy-950">How we use information</h2>
              <p>
                We use submitted information to respond to enquiries, provide admissions guidance,
                communicate about school services, and improve the website and visitor experience.
              </p>
              <p>We do not sell personal information to third parties.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl text-navy-950">Third-party services</h2>
              <p>
                This website may link to third-party services, including Google Maps and the school
                result portal. Those services operate under their own privacy policies.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl text-navy-950">Your choices</h2>
              <p>
                You may contact us to ask what personal information we hold about you or to request
                that inaccurate information be corrected. We may need to verify your identity before
                completing a request.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl text-navy-950">Contact us</h2>
              <p>
                For privacy questions, contact {schoolConfig.name} at{' '}
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
