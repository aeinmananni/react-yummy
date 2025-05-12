import { useState } from 'react';
import Button from '../../../../../../custom/button';
import { Form } from './components';
export default function Header() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="flex justify-center items-center w-full  min-h-1/6 p-2 border-b">
      {show ? (
        <Form setShow={setShow} />
      ) : (
        <Button
          onClick={() => setShow(true)}
          className="bg-orange-500 rounded-md shadow-sm text-white p-3 active:scale-95 duration-300"
        >
          Add New Expense
        </Button>
      )}
    </div>
  );
}
