import Button from '../../../../../../custom/button';

type Props = {
  title: 'X' | 'O' | null;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Board({ title, onClick, disabled }: Props) {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      className={`shadow-md text-7xl text-white rounded-lg border ${
        !disabled && 'active:scale-95'
      } duration-300 ${title === 'X' ? 'text-shadow-blue' : title === 'O' ? 'text-shadow-red' : ''}`}
    >
      {title}
    </Button>
  );
}
