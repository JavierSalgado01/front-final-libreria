import Image from 'next/image';
import Button from '@/components/Button';

  const Card = ({ libro }) => {
    return (
      <div className="w-30 rounded overflow-hidden shadow-lg bg-gray-400 m-4">
        {libro.img && (
          <Image className="w-full h-80" src={libro.img} alt={libro.nombre} width={150} height={150} />
        )}
        <div className="px-4 py-2 pb-12">
          <div className="font-bold text-lg mb-2">{libro.nombre}<p className='font-sans text-sm'>{libro.autor}</p></div>
          <p className="text-gray-700 text-sm">{libro.sipsnosis}</p>
          <div className='flex items-end py-4'>
            <Button texto='Al carrito!' />
            <div className='flex items-right'>{libro.precio}</div>
          </div>
        </div>
      </div>
    );
  };


export default Card;
