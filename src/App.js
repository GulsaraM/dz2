import './App.css';
import UsersPage from "./pages/usersPage/UsersPage"
import {Numbers, Emails} from "./pages/contectsPage/ContactsPage"
import ProductsPage from "./pages/productsPage/ProductsPage";
import AboutUs from "./pages/aboutUs/AboutUs";

// function User ({name, age}) {
//     return (
//         <h1>Name: {name}, Age: {age}</h1>
//     )
// }

function App() {
  return (
    <div className="App">
        {/*<User name="Dastan" age="26"/>*/}
        {/*<User name="Atai" age="17"/>*/}
        {/*<User name="Nurdin" age="18"/>*/}
      <UsersPage name="Anara" age="25"/>
      <UsersPage name="Timur" age="20"/>
        <h1>--------------------------------</h1>
        <Numbers/>
        <Emails/>
        <h1>--------------------------------</h1>
        <ProductsPage/>
        <h1>ABOUT US</h1>
        <AboutUs/>

    </div>
  );
}

export default App;
