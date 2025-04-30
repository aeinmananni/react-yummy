import { TabsType, ChallengrCartType, ShoppingType } from '../models';
import shot_women1 from '../components/react-essentials/components/images/shot-women7.jpg';
import shot_women2 from '../components/react-essentials/components/images/shot-women2.jpg';
import shot_women3 from '../components/react-essentials/components/images/shot-women3.jpg';
import shot_women4 from '../components/react-essentials/components/images/shot-women4.jpg';
import shot_women6 from '../components/react-essentials/components/images/shot-women6.jpg';
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
