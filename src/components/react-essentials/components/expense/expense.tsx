import { Header, Main, Footer } from './components';
export default function Expense() {
  return (
    <div className="min-h-max flex-col w-full border rounded-lg flex ">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
