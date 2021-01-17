import './App.css';
import { Provider } from 'react-redux';
import Footer from './components/NavigationMenu/Footer';
import TopNav from './components/NavigationMenu/TopNav';
import { Route, Switch } from 'react-router-dom';
import store from './store/index';

import Login from './components/Login/Login';
import DashBoard from './components/DashBoard/DashBoard';
import VerClientes from './components/Clientes/VerClientes';
import VerEncomendas from './components/Encomendas/VerEncomendas';
import VerAtividades from './components/Atividades/VerAtividades';
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import VerCasas from './components/Casas/VerCasas';
import VerProdutos from './components/Produtos/verProdutos';
import VerPA from './components/Palmocos/VerPA';
import VerMenus from './components/Menus/VerMenus';
import VerEntregas from './components/Entregas/verEntregas';
import ProdutosParaEntrega from './components/Entregas/ProdutosParaEntrega';
import VerContactos from './components/Contactos/Contactos';
import NovoContacto from './components/Contactos/NovoContacto';
import EditarContactos from './components/Contactos/EditarContactos';



function App() {
  return (
    <Provider store={store}>
      <div className='page-wrapper'>
        <TopNav />
        <div class='page-container'>
          <NavigationMenu />
          <div class='page-content-wrapper'>
            <Switch>
              <Route exact path='/' component={DashBoard} />
              <Route exact path='/Login' component={Login} />
              <Route exact path='/verClientes' component={VerClientes} />
              <Route exact path='/verEncomendas' component={VerEncomendas} />
              <Route exact path='/verAtividades' component={VerAtividades} />
              <Route exact path='/verCasas' component={VerCasas} />
              <Route exact path='/verProdutos' component={VerProdutos} />
              <Route exact path='/verPequenosAlmocos' component={VerPA} />
              <Route exact path='/verMenus' component={VerMenus} />
              <Route exact path='/verEntregas' component={VerEntregas} />
              <Route exact path='/ProdutosParaEntrega' component={ProdutosParaEntrega} />
              <Route exact path='/verContactos' component={VerContactos} />
              <Route exact path='/novoContacto' component={NovoContacto} />
              <Route exact path='/editarContacto' component={EditarContactos} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
