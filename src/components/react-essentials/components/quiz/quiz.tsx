import { Header, Quizes } from './components';
import quizeBackground from '../images/quiz-background.jpg';
export default function Quiz() {
  return (
    <div
      style={{ backgroundImage: `url(${quizeBackground})` }}
      className="w-full min-h-screen flex flex-col items-center  p-2 rounded-md object-cover gap-16"
    >
      <Header />
      <Quizes />
    </div>
  );
}
