import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-[#F7F9FC] py-20">
      <div className="container-shell max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0078D4]">
          404 Error
        </p>
        <h1 className="mt-4 text-4xl leading-tight md:text-5xl">Page not found</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          The page you are looking for is unavailable or may have moved. Return home or contact KB
          Enterprise Solutions LLC for Business Central consulting support.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/">Return Home</ButtonLink>
        </div>
      </div>
    </section>
  );
}
