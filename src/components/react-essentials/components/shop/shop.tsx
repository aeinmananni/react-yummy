import { Header, Carts, Modal } from './components';

export default function Shop() {
  return (
    <div className="w-full min-h-max  bg-orange-900/35 rounded-lg backdrop-filter backdrop-blur-md flex flex-col gap-8 relative">
      <Modal />
      <Header />
      <Carts />
    </div>
  );
}
