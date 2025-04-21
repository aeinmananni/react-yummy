import Line from '../../../../custom/line';

export default function Header() {
  return (
    <div className="flex flex-col gap-5 items-center">
      <h1 className="text-6xl font-bold textColor">ReactEssentials</h1>
      <Line />
      <p className="textColor !to-purple-200 text-justify">
        Reasoned about React's strengths for 6 seconds React is a powerful JavaScript library that simplifies
        building interactive user interfaces. Its component-based design allows developers to create reusable
        code, making projects more manageable and scalable. The virtual DOM boosts performance by efficiently
        updating only the necessary parts of the UI. Moreover, React benefits from a vibrant community and a
        rich ecosystem of tools, ensuring continuous improvement and support for developers worldwide.
      </p>
    </div>
  );
}
