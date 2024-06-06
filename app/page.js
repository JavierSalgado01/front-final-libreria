import Link from "next/link";
import Image from "next/image";
import Card from '@/components/Cards';
import Book from '@/components/Book/libro.json';

export default function Home() {
  const libros = Book.datos;

  return (
    <main className="">
      <header className='flex justify-between p-3 text-red-500'>
        <div className='text-yellow-600 font-sans text-4xl'>Libreria "el ígnaro"</div>
        <nav className="flex items-center gap-4">
          <Link href=''>Home</Link>
          <Link href=''>Carrito</Link>
          <Link href=''>Nosotros</Link>
          <Link href=''>Contacto</Link>
          <Link href='' className='bg-red-800 text-white rounded-full px-4 py-2'>Login</Link>
        </nav>
      </header>
      <section className="flex flex-wrap">
        <div className="grid grid-cols-4 gap-4">
          {libros.map((libro, index) => (
            <Card key={index} libro={libro} />
          ))}
        </div>
      </section>
      <footer className="p-4 bg-gray-200 text-center">
        <h3>Métodos de pagos aceptados</h3>
      </footer>
    </main>
  );
}
