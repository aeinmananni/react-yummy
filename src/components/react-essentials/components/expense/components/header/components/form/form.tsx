import { useForm } from 'react-hook-form';
import Button from '../../../../../../../../custom/button';
import Input from '../../../../../../../../custom/input';
import { ExpenseFormTypes } from '../../../../../../../../models';
import { Dispatch, SetStateAction } from 'react';
import { useReactContext } from '../../../../../../../../context/context';

type FormProps = {
  setShow: Dispatch<SetStateAction<boolean>>;
};

const resetItems: ExpenseFormTypes = { amount: 0, date: '', title: '' };
const className = 'px-2 rounded-lg py-1';
export default function Form({ setShow }: FormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ExpenseFormTypes>();
  const { SET_EXPENSE_ITEMS } = useReactContext();

  const onSubmite = (data: ExpenseFormTypes) => {
    SET_EXPENSE_ITEMS((prev) => {
      const lastId = prev.length > 0 ? prev[prev.length - 1].id ?? 0 : 0;
      const newItem = { ...data, id: lastId + 1, date: data.date.split('-').join('/') };
      return [...prev, newItem];
    });
    reset(resetItems);
  };

  return (
    <form onSubmit={handleSubmit(onSubmite)} className="w-full flex flex-col items-center gap-8 p-2">
      <div className="flex w-full gap-2">
        <Input
          {...register('title', { required: 'title is Required' })}
          label="title"
          className={className}
          error={errors.title && errors.title.message}
        />
        <Input
          {...register('amount', { required: 'amount is Required' })}
          label="amount"
          className={className}
          error={errors.amount && errors.amount.message}
        />
        <Input
          {...register('date', { required: 'date is Required' })}
          label="date"
          className={className}
          type="date"
          error={errors.date && errors.date.message}
        />
      </div>

      <div className="w-full flex items-center justify-end gap-4">
        <Button type="submit" className="bg-green-400 p-2 rounded-md">
          Add Expense
        </Button>
        <Button
          onClick={() => {
            setShow(false);
            reset(resetItems);
          }}
          className="text-green-400 p-2 border-2 border-green-400 rounded-md"
        >
          cancel
        </Button>
      </div>
    </form>
  );
}
