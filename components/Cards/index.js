import Image from 'next/image';
import Button from '@/components/Button';

  const Card = ({ libro }) => {
    return (
      <div className="w-30 rounded overflow-hidden shadow-lg bg-gray-400 m-4">
        {libro.img && (
          <Image className="w-full h-80" src={libro.img} alt={libro.nombre} width={150} height={150} />
        )}
        <div className="px-4 py-1 pb-3">
          <div className="font-bold text-lg mb-4">{libro.nombre}<p className='font-sans text-sm'>{libro.autor}</p></div>
          <p className="text-gray-700 text-sm pb-3">{libro.sipsnosis}</p>
          <div className='flex items-center py--5'>
            <Button texto='Al carrito!' />
            <div className='font-semibold text-slate-700 px-10'>{libro.precio}</div>
          </div>
        </div>
      </div>
    );
  };


export default Card;
