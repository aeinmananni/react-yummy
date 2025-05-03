import { ModalCart } from './components';
import { useReactContext } from '../../../../../../context/context';
export default function Modal() {
  const { pictureModal, setPictureModal, setSelectedPicture } = useReactContext();
  return (
    <div
      onClick={() => setPictureModal(null)}
      className={`absolute w-full h-full bg-yellow-800/50 rounded-lg top-0 left-0 flex justify-center ${
        pictureModal ? 'z-20 opacity-100' : '-z-10 opacity-0'
      } duration-300`}
    >
      <ModalCart
        onCancel={() => setPictureModal(null)}
        onYes={() => {
          setSelectedPicture((prev) => prev.filter((it) => it?.id !== pictureModal?.id));
          setPictureModal(null);
        }}
      />
    </div>
  );
}
