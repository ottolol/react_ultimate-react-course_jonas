import "./style.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <ul className="pizzas">
        {pizzaData.map((p) => (
          <Pizza pizzaObj={p} key={p.name} />
        ))}
        {/* {pizzaData.map((p) => (
          <Pizza
            name={p.name}
            ingredients={p.ingredients}
            price={p.price}
            photoName={p.photoName}
            soldOut={p.soldOut}
          />
        ))} */}

        {/* <Pizza
          name="Pizza Prosciutto"
          ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
          price="18"
          photoName="pizzas/prosciutto.jpg"
          soldOut="false"
        />*/}
      </ul>
    </main>
  );
}

function Pizza(props) {
  return (
    <li className={!props.pizzaObj.soldOut ? "pizza" : "pizza sold-out"}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>
          {!props.pizzaObj.soldOut ? props.pizzaObj.price : "soldOut"}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open");
  // else alert("Sorry, we're closed");

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}.{" "}
      {isOpen ? "We're currently open" : "Sorry, we're closed"}
    </footer>
  );
}

// D:\Из Торрента\The Ultimate React Course 2023 React, Redux & More\5. Working With Components, Props, and JSX
// 47  Conditional Rendering With &&.mkv
