import { useReactContext } from '../../../../../../context/context';
import { Cart } from '../cart';

export default function Header() {
  const { selectedPicture, setPictureModal } = useReactContext();
  return (
    <div className="w-full h-full border py-2  rounded-lg overflow-y-auto">
      {selectedPicture.length > 0 ? (
        <div className="w-full h-full grid grid-cols-3 ">
          {selectedPicture.map((it, index) => (
            <Cart key={index} image={it.image} onClick={() => setPictureModal({ id: it.id })} />
          ))}
        </div>
      ) : (
        <div className="w-full h-full flex justify-center flex-col items-center gap-3">
          <span className="text-indigo-600 text-2xl font-bold">I'd like to visit...</span>
          <span className="text-slate-200">Select the places would like to visit below</span>
        </div>
      )}
    </div>
  );
}
