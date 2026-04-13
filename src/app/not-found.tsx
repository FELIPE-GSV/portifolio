import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="gradient-text text-8xl font-bold">404</h1>
      <p className="mt-4 text-xl text-muted">Página não encontrada</p>
      <Link
        href="/"
        className="mt-8 rounded-full border border-card-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent-1 hover:text-accent-1"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
