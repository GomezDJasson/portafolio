export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500">

        <p>
          © {new Date().getFullYear()} Jasson D Gomez
        </p>

        <p className="mt-2 md:mt-0">
          Desarrollado por <span className="text-zinc-300">Jasson D Gomez</span>
        </p>

      </div>
    </footer>
  );
}