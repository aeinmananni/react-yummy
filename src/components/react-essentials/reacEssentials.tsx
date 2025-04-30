import {
  Header,
  Box,
  Example,
  TicTacToe,
  Investmentcalculator,
  Login,
  Challenges,
  Projects
} from './components';

export default function ReactEssenTials() {
  return (
    <div className="w-2/3 h-full flex flex-col items-center p-3 bg-slate-50/5  rounded-md backdrop backdrop-blur-md gap-8 overflow-y-auto overflow-x-hidden">
      <Header />
      <Box />
      <Example />
      <TicTacToe />
      <Investmentcalculator />
      <Login />
      <Challenges />
      <Projects />
    </div>
  );
}
