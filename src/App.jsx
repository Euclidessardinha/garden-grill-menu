import Home from "./pages/Home";
import Menu from "./pages/Menu";
import DishDetails from "./pages/DishDetails";
import Cart from "./pages/Cart";
import VisiteNos from "./pages/VisiteNos";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const path = window.location.pathname;


  if (path === "/admin") {
    return <AdminDashboard />;
  }

  if (path === "/admin/login") {
    return <AdminLogin />;
  }

  // Página inicial
  if (path === "/") {
    return <Home />;
  }

  // Menu completo
  if (path === "/menu") {
    return <Menu />;
  }

  //Carrinho
  if (path === "/cart"){
    return <Cart />;
  }

  // Detalhes de um prato
  if (path.startsWith("/menu/")) {
    return <DishDetails />;
  }

  if (path === "/visite-nos") {
    return <VisiteNos />;
  }

  // Caso a página não exista,
  // volta para a página inicial
  return <Home />;
}

export default App;