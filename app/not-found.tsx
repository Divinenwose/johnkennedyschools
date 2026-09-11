import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center bg-ivory-100 py-24">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-700">Error 404</p>
          <h1 className="mt-4 font-display text-5xl md:text-6xl text-navy-950">Page not found</h1>
          <p className="mt-5 text-lg text-charcoal-700 leading-relaxed">
            The page you are looking for may have moved, or the address may be incorrect.
          </p>
          <div className="mt-8">
            <Link href="/">
              <Button variant="primary" size="lg">Return Home</Button>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
