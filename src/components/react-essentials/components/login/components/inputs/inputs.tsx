import Button from '../../../../../../custom/button';
import Input from '../../../../../../custom/input';
import { useForm } from 'react-hook-form';
import { LoginType } from '../../../../../../models';
const inputClassName = 'outline-none focus:ring-2 ring-offset-2 ring-yellow-500 rounded-md p-1';

export default function Inputs() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginType>();

  const onSubmite = (data: LoginType) => {
    alert(JSON.stringify(data, null, 2));
  };
  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmite)}>
      <Input
        {...register('email', {
          required: 'Email is Required !',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Invalid email address'
          }
        })}
        type="email"
        label="EMAIL"
        className={inputClassName}
        styles={{ labelClassName: '!text-yellow-400' }}
        error={errors.email && errors.email.message}
      />
      <Input
        {...register('password', {
          required: 'password is Reuqired !'
        })}
        type="password"
        label="PASSWORD"
        className={inputClassName}
        styles={{ labelClassName: '!text-yellow-400' }}
        error={errors.password && errors.password.message}
      />
      <div className="flex w-full gap-2 items-center justify-end">
        <Button className="text-yellow-400 font-semibold text-md">create new Account</Button>
        <Button className="bg-purple-900 p-1 text-white rounded-md w-1/4">SingeIn</Button>
      </div>
    </form>
  );
}
