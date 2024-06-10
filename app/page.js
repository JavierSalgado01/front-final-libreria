import Link from "next/link";
import Image from "next/image";
import Card from '@/components/Cards';
import Book from '@/components/Book/libro.json';
import Book2 from '@/components/Book2/libro.json';

export default function Home() {
  const libros = Book.datos;
  const libro = Book2.datos2;

  return (
    <main className="bg-cover bg-auto bg-center bg-repeat min-h-screen" style={{ backgroundImage: "url('/assets/background/body.jpg')" }}>
      <header className='flex justify-between p-3 text-yellow-500'>
        <div className='font-mono text-yellow-500 font-sans text-4xl'>Libreria "el ígnaro"<p className="font-bold text-2xl text-slate-200">Ahora renovados</p></div>
        <nav className="flex items-center gap-4">
          <Link href=''>Home</Link>
          <Link href=''>Categorias</Link>
          <Link href=''>Carrito</Link>
          <Link href=''>Nosotros</Link>
          <Link href=''>Contacto</Link>
          <Link href='' className='flex bg-yellow-800 text-white rounded-full px-4 py-2'><Image className="flex w-4"  src="/assets/background/lgo.svg" alt="lgo" width={14} height={14}/>Mi cuenta</Link>
        </nav>
      </header>
      <section className="flex flex-wrap">
        <div className="grid grid-cols-4 gap-4">
          {libros.map((libro, index) => (
            <Card key={index} libro={libro} />
          ))}
        </div>
      </section>
      <div>
      <div className="bg-cover bg-auto bg-center bg-repeat min-h-screen" style={{ backgroundImage: "url('/assets/background/vendidos.jpg')" }}>
        <div className="text-white text-center font-bold text-xl"><h1>Los mas vendidos!</h1></div>
        <section className="flex-wrap text-justify">
        <div className="grid grid-cols-4 gap-4">
          {libro.map((libro, index) => (
            <Card key={index} libro={libro} />
          ))}
        </div>
      </section>
      </div>
        <footer className="p-4 bg-white text-center">
          <div><h3>  💲 💲Métodos de pagos aceptados 💲 💲</h3></div>
            <div className="flex justify-center gap-4">
                <Image src="/assets/pago/visa.svg" alt="visa" width={110} height={110} />
                <Image src="/assets/pago/mastercard-4.svg" alt="master" width={110} height={110} />
                <Image src="/assets/pago/paypal.svg" alt="PayPal" width={110} height={110} />
                <Image src="/assets/pago/banco.svg" alt="banco" width={110} height={110} />
                <Image src="/assets/pago/bit.png" alt="bit" width={110} height={110} />
                <Image src="/assets/pago/trank.svg" alt="trank" width={110} height={110} />
                <Image src="/assets/pago/web.svg" alt="web" width={110} height={110} />
            </div>
        </footer>
      </div>
    </main>
  );
}
