import { Header } from './components';
import challengesImage from '../images/challenges-image.webp';
export default function Challenges() {
  return (
    <div
      style={{
        backgroundImage: `url(${challengesImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
      className="flex flex-col min-h-screen w-full rounded-lg items-center"
    >
      <Header />
    </div>
  );
}
