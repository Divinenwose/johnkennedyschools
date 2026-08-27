import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { ApplicationStatusLookup } from '@/components/admissions/ApplicationStatusLookup';
import { schoolImages } from '@/config/images-config';

export const metadata = {
  title: 'Check Application Status | John Kennedy International Schools',
};

export default function ApplicationStatusPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Admissions"
        title="Check Application Status"
        description="Enter your application number and the email address you used during registration to view your application."
        image={schoolImages.pageHeroes.admissions}
        overlay="diagonal"
      />

      <section className="py-16 md:py-24 bg-ivory-100">
        <Container size="sm">
          <ApplicationStatusLookup />
        </Container>
      </section>
    </main>
  );
}
