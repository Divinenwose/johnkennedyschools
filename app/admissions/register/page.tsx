import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { RegistrationForm } from '@/components/admissions/RegistrationForm';
import { schoolImages } from '@/config/images-config';

export const metadata = {
  title: 'Admission Registration | John Kennedy International Schools',
};

export default function AdmissionRegisterPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Admission Registration"
        title="Start Your Application"
        description="Complete the form below to begin your child's admission process at John Kennedy International Schools. It takes about 10 minutes."
        image={schoolImages.pageHeroes.admissions}
        overlay="standard"
      />

      <section className="py-16 md:py-24 bg-ivory-100">
        <Container size="md">
          <RegistrationForm />
        </Container>
      </section>
    </main>
  );
}
