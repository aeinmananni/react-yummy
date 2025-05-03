import { useReactContext } from '../../../../../../../../context/context';
import Button from '../../../../../../../../custom/button';

type ModalCartProps = {
  onYes?: () => void;
  onCancel?: () => void;
};

export default function ModalCart({ onCancel, onYes }: ModalCartProps) {
  const { pictureModal } = useReactContext();
  return (
    <div
      className={` bg-orange-300 rounded-lg h-1/6 w-1/2 mt-64 flex flex-col justify-between duration-300  p-2 ${
        pictureModal ? 'translate-y-7 opacity-100 delay-150' : '-translate-y-7 opacity-0'
      }`}
    >
      <span className="text-2xl">Are you sure you want to delete this?</span>
      <div className="flex items-center gap-2">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            if (onYes) onYes();
          }}
          className="bg-black text-white px-4 py-1"
        >
          Yes
        </Button>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            if (onCancel) onCancel();
          }}
          className="border border-black px-4 py-1"
        >
          No
        </Button>
      </div>
    </div>
  );
}
