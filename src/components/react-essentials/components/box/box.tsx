import Cart from './cart';
import Components from '../icons/components';
import Jsx from '../icons/jsx';
import Props from '../icons/props';
import State from '../icons/state';

export default function Box() {
  return (
    <>
      <div className="bg-purple-950/50 h-max w-full flex flex-col gap-3 items-center p-3 text-white rounded-lg">
        <span className="font-semibold">Core Concepts</span>
        <div className="w-full h-full flex justify-between items-center overflow-hidden">
          <Cart
            icon={<Components />}
            title="Component"
            exp={`Components are the independent building blocks of a user interface. They allow you to break down complex UIs into smaller, reusable pieces. This modular approach makes it easier to develop, maintain, and debug your projects.`}
          />
          <Cart
            icon={<Jsx />}
            title="Jsx"
            exp={`JSX is a syntax extension for JavaScript that lets you write HTML-like code within your JavaScript files. It improves code readability and makes it easier to develop interfaces in libraries like React.`}
          />
          <Cart
            icon={<Props />}
            title="Props"
            exp={`Props (short for properties) are the inputs passed from a parent component to a child component. They allow you to configure and customize the behavior or appearance of a component, much like passing parameters to a function.`}
          />
          <Cart
            icon={<State />}
            title="State"
            exp={`State refers to the local data storage within a component that can change over time. Changes in state trigger updates (re-rendering) to the UI, making it responsive to user interactions and data changes.`}
          />
        </div>
      </div>
    </>
  );
}
