import { Header, Baner, Modal, Carts } from './components';

export default function Picture() {
  return (
    <div className="min-h-max  w-full flex flex-col overflow-hidden p-3 gap-10 relative rounded-lg  items-center">
      <Modal />
      <Baner />
      <Header />
      <Carts />
    </div>
  );
}
