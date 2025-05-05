import { TabsType, ChallengrCartType, ShoppingType, PictureTypes, QuizType } from '../models';
import shot_women1 from '../components/react-essentials/components/images/shot-women7.jpg';
import shot_women2 from '../components/react-essentials/components/images/shot-women2.jpg';
import shot_women3 from '../components/react-essentials/components/images/shot-women3.jpg';
import shot_women4 from '../components/react-essentials/components/images/shot-women4.jpg';
import shot_women6 from '../components/react-essentials/components/images/shot-women6.jpg';
import art1 from '../components/react-essentials/components/images/art1.jpg';
import art2 from '../components/react-essentials/components/images/art2.jpg';
import art3 from '../components/react-essentials/components/images/art3.jpg';
import art4 from '../components/react-essentials/components/images/art4.jpg';
import art5 from '../components/react-essentials/components/images/art5.jpg';
import art6 from '../components/react-essentials/components/images/art6.jpg';
import art7 from '../components/react-essentials/components/images/art7.jpg';
import art8 from '../components/react-essentials/components/images/art8.jpg';
import art9 from '../components/react-essentials/components/images/art9.jpg';
import art10 from '../components/react-essentials/components/images/art10.jpg';

export const tabs: TabsType[] = [
  {
    id: 1,
    title: 'Components',
    exp: `
// ------------ Hello Component ------------

function Hello() {
  return <h1>سلام دنیا</h1>;
}

// ------------ Message Component ------------
function Message() {
  return <p>به کامپوننت من خوش آمدید!</p>;
}

// ------------ App Component ------------

function App() {
  return (
    <div>
      <h1>برنامه من</h1>
      <Message />
      <Hello />
    </div>
  );
}

`
  },
  {
    id: 2,
    title: 'Jsx',
    exp: `
    const name = "علی";
const element = <h2>سلام {name}!</h2>;

//---------------------------------------------------------
const isLoggedIn = true;
const message = <p>{isLoggedIn ? "خوش آمدی!" : "لطفاً وارد شو"}</p>;

//----------------------------------------------------------------------
const fruits = ["سیب", "موز", "انگور"];
const list = (
  <ul>
    {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>
    ))}
  </ul>
);
`
  },
  {
    id: 3,
    title: 'Props',
    exp: `
function Greeting(props: { name: string }) {
  return <h3>سلام {props.name}</h3>;
}

// استفاده
<Greeting name="زهرا" />

//--------------------------------------------------------------

function Score(props: { value: number }) {
  return <p>امتیاز شما: {props.value}</p>;
}

// استفاده
<Score value={85} />

//---------------------------------------------------------------
type UserType = { name: string; age: number };

function UserInfo(props: { user: UserType }) {
  return <p>{props.user.name} - {props.user.age} ساله</p>;
}

// استفاده
<UserInfo user={{ name: "مینا", age: 23 }} />

`
  },
  {
    id: 4,
    title: 'State',
    exp: `
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>شمارش: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
//-------------------------------------------------------------------
function ToggleText() {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>تغییر</button>
      {show ? <p>نمایش داده می‌شود</p> : <p>مخفی شده</p>}
    </>
  );
}
//-----------------------------------------------------------------
function NameInput() {
  const [name, setName] = useState("");
  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>نام شما: {name}</p>
    </>
  );
}

`
  }
];

export const WINING_COMBINATIONS: { row: number; col: number }[][] = [
  [
    { row: 0, col: 0 },
    { row: 0, col: 1 },
    { row: 0, col: 2 }
  ],
  [
    { row: 1, col: 0 },
    { row: 1, col: 1 },
    { row: 1, col: 2 }
  ],
  [
    { row: 2, col: 0 },
    { row: 2, col: 1 },
    { row: 2, col: 2 }
  ],

  [
    { row: 0, col: 0 },
    { row: 1, col: 0 },
    { row: 2, col: 0 }
  ],
  [
    { row: 0, col: 1 },
    { row: 1, col: 1 },
    { row: 2, col: 1 }
  ],
  [
    { row: 0, col: 2 },
    { row: 1, col: 2 },
    { row: 2, col: 2 }
  ],

  [
    { row: 0, col: 0 },
    { row: 1, col: 1 },
    { row: 2, col: 2 }
  ],

  [
    { row: 0, col: 2 },
    { row: 1, col: 1 },
    { row: 2, col: 0 }
  ]
];

export const CHALLENGE_CART_ITEMS: ChallengrCartType[] = [
  { id: 1, title: 'EASY', targetTime: 1 },
  { id: 2, title: 'NOT EASY', targetTime: 5 },
  { id: 3, title: 'GETTING TOUGH', targetTime: 10 },
  { id: 4, title: 'PROS ONLY', targetTime: 15 }
];

export const SHOPPING_LIST: ShoppingType[] = [
  {
    id: 1,
    title: 'Sporty Sneakers',
    exp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula, lorem at vestibulum cursus, magna ex fermentum odio, a pharetra augue augue vel metus.',
    image: shot_women1,
    price: 32000
  },
  {
    id: 2,
    title: 'Winter Jacket',
    exp: 'Curabitur nec urna vitae tortor blandit luctus. Vivamus a convallis erat. Quisque ac bibendum ligula, vitae scelerisque turpis. Donec eu mauris nec eros tincidunt volutpat.',
    image: shot_women2,
    price: 81000
  },
  {
    id: 3,
    title: 'Stylish Sunglasses',
    exp: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed dapibus, nunc vel viverra faucibus, eros lacus sagittis nisitincidunt volutpat.',
    image: shot_women3,
    price: 12000
  },
  {
    id: 4,
    title: 'Smart Watch',
    exp: 'Fusce id sapien ac quam elementum pretium. Cras sit amet velit non ipsum laoreet gravida. Nullam vel sem sed velit suscipit dignissim non a velit.',
    image: shot_women4,
    price: 323000
  },

  {
    id: 6,
    title: 'Wireless Headphones',
    exp: 'Aliquam erat volutpat. Sed sollicitudin nulla eu neque viverra, ut ullamcorper tellus porttitor. Integer convallis justo vitae justo volutpat',
    image: shot_women6,
    price: 143000
  }
];

export const PLACES: PictureTypes[] = [
  { id: 1, lat: 35.6892, lon: 51.389, image: art1 },
  { id: 2, lat: 32.4279, lon: 53.688, image: art2 },
  { id: 3, lat: 29.59, lon: 52.5836, image: art3 },
  { id: 4, lat: 36.2605, lon: 59.6168, image: art4 },
  { id: 5, lat: 38.07, lon: 46.2919, image: art5 },
  { id: 6, lat: 37.2808, lon: 49.5832, image: art6 },
  { id: 7, lat: 34.6401, lon: 50.8764, image: art7 },
  { id: 8, lat: 30.2839, lon: 57.0834, image: art8 },
  { id: 9, lat: 35.3149, lon: 46.9988, image: art9 },
  { id: 10, lat: 37.5528, lon: 45.076, image: art10 }
];

export const QUIZ_ITEMS: QuizType[] = [
  {
    id: '1',
    text: 'Which animal is the fastest?',
    answers: ['Cheetah', 'Rabbit', 'Horse', 'Dog']
  },
  {
    id: '2',
    text: 'What is the capital of Iran?',
    answers: ['Tehran', 'Isfahan', 'Tabriz', 'Mashhad']
  },
  {
    id: '3',
    text: 'What is the sum of 8 and 5?',
    answers: ['13', '12', '14', '10']
  },
  {
    id: '4',
    text: 'Which planet is closest to the sun?',
    answers: ['Mercury', 'Venus', 'Earth', 'Mars']
  },
  {
    id: '5',
    text: 'Which one is not a primary color?',
    answers: ['Green', 'Blue', 'Red', 'Yellow']
  },
  {
    id: '6',
    text: 'Which animal lives in the ocean?',
    answers: ['Whale', 'Lion', 'Tiger', 'Cow']
  },
  {
    id: '7',
    text: 'Which number is even?',
    answers: ['4', '7', '9', '3']
  },
  {
    id: '8',
    text: 'Which country is in Europe?',
    answers: ['France', 'Japan', 'China', 'Egypt']
  },
  {
    id: '9',
    text: 'Which one is not a season?',
    answers: ['Color', 'Spring', 'Summer', 'Fall']
  },
  {
    id: '10',
    text: 'Which one is a fruit?',
    answers: ['Apple', 'Potato', 'Cabbage', 'Carrot']
  }
];
