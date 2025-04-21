import { TabsType } from '../models';

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
