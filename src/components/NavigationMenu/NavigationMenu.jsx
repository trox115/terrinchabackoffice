import React from 'react'
import { Link } from 'react-router-dom';

export default function NavigationMenu() {
  return (
    <div className='sidebar-container'>
      <div className='sidemenu-container navbar-collapse collapse fixed-menu'>
        <div id='remove-scroll'>
          <ul
            className='sidemenu page-header-fixed p-t-20'
            data-keep-expanded='false'
            data-auto-scroll='true'
            data-slide-speed='200'
          >
            <li className='sidebar-toggler-wrapper hide'>
              <div className='sidebar-toggler'>
                <span></span>
              </div>
            </li>
            <li className='sidebar-user-panel'>
              <div className='user-panel'>
                <div className='row'>
                  <div className='sidebar-userpic'>
                    <img src='assets/img/dp.jpg' className='img-responsive' alt='' />{' '}
                  </div>
                </div>
                <div className='profile-usertitle'>
                  <div className='sidebar-userpic-name'> António </div>
                  <div className='profile-usertitle-job'> Admin </div>
                </div>
                <div className='sidebar-userpic-btn'>
                  <a
                    className='tooltips'
                    href='user_profile.html'
                    data-placement='top'
                    data-original-title='Profile'
                  >
                    <i className='material-icons'>person_outline</i>
                  </a>
                  <a
                    className='tooltips'
                    href='email_inbox.html'
                    data-placement='top'
                    data-original-title='Mail'
                  >
                    <i className='material-icons'>mail_outline</i>
                  </a>
                  <a
                    className='tooltips'
                    href='chat.html'
                    data-placement='top'
                    data-original-title='Chat'
                  >
                    <i className='material-icons'>chat</i>
                  </a>
                  <a
                    className='tooltips'
                    href='login.html'
                    data-placement='top'
                    data-original-title='Logout'
                  >
                    <i className='material-icons'>input</i>
                  </a>
                </div>
              </div>
            </li>
            <li className='menu-heading'>
              <span>-- Menu</span>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link nav-toggle'>
                <i className='material-icons'>email</i>
                <span className='title'>Clientes</span>
                <span className='arrow'></span>
              </a>
              <ul className='sub-menu'>
                <li className='nav-item'>
                  <a href='email_inbox.html' className='nav-link '>
                    <span className='title'>Novo</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <Link to='/verClientes' className='nav-link'>
                    <span className='title'>Ver</span>
                    </Link>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link nav-toggle'>
                <i className='material-icons'>business_center</i>
                <span className='title'>Reservas</span>
                <span className='arrow'></span>
              </a>
              <ul className='sub-menu'>
                <li className='nav-item'>
                  <a href='new_booking.html' className='nav-link '>
                    <span className='title'>Nova reserva</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='view_booking.html' className='nav-link '>
                    <span className='title'>Ver reservas</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='edit_booking.html' className='nav-link '>
                    <span className='title'>Editar reservas</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link nav-toggle'>
                <i className='material-icons'>vpn_key</i>
                <span className='title'>Casas</span>
                <span className='arrow'></span>
              </a>
              <ul className='sub-menu'>
                <li className='nav-item'>
                <Link to='/verCasas' className='nav-link'>
                    <span className='title'>Ver Todas as casas</span>
                    </Link>
                </li>
                <li className='nav-item'>
                  <a href='all_rooms.html' className='nav-link '>
                    <span className='title'>Adicionar Casas</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='edit_room.html' className='nav-link '>
                    <span className='title'>Editar casas</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link nav-toggle'>
                <i className='material-icons'>gift</i>
                <span className='title'>Encomendas</span>
                <span className='arrow'></span>
              </a>
              <ul className='sub-menu'>
                <li className='nav-item'>
                <Link to='/verEncomendas' className='nav-link'>
                    <span className='title'>Ver Encomendas</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link nav-toggle'>
                <i className='material-icons'>gift</i>
                <span className='title'>Atividades</span>
                <span className='arrow'></span>
              </a>
              <ul className='sub-menu'>
                <li className='nav-item'>
                <Link to='/verAtividades' className='nav-link'>
                    <span className='title'>Ver atividades</span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <a href='add_room.html' className='nav-link '>
                    <span className='title'>Inserir nova</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link nav-toggle'>
                <i className='material-icons'>gif</i>
                <span className='title'>P. Almoços</span>
                <span className='arrow'></span>
              </a>
              <ul className='sub-menu'>
                <li className='nav-item'>
                <Link to='/verPequenosAlmocos' className='nav-link'>
                    <span className='title'>Ver</span>
                  </Link>
                </li>

              </ul>
            </li>

            <li className='nav-item'>
              <a href='#' className='nav-link nav-toggle'>
                <i className='material-icons'>gif</i>
                <span className='title'>Produtos</span>
                <span className='arrow'></span>
              </a>
              <ul className='sub-menu'>
                <li className='nav-item'>
                <Link to='/verProdutos' className='nav-link'>
                    <span className='title'>Ver</span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <a href='add_room.html' className='nav-link '>
                    <span className='title'>Novo</span>
                  </a>
                </li>

              </ul>
            </li>

            <li className='nav-item'>
              <a href='#' className='nav-link nav-toggle'>
                <i className='material-icons'>gif</i>
                <span className='title'>M. Degustação</span>
                <span className='arrow'></span>
              </a>
              <ul className='sub-menu'>
                <li className='nav-item'>
                <Link to='/verMenus' className='nav-link'>

                    <span className='title'>Ver</span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <a href='add_room.html' className='nav-link '>
                    <span className='title'>Novo</span>
                  </a>
                </li>

              </ul>
            </li>

            <li className='nav-item'>
              <a href='#' className='nav-link nav-toggle'>
                <i className='material-icons'>gif</i>
                <span className='title'>Entrega casa</span>
                <span className='arrow'></span>
              </a>
              <ul className='sub-menu'>
                <li className='nav-item'>
                <Link to='/verEntregas' className='nav-link'>
                    <span className='title'>Ver</span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/ProdutosParaEntrega' className='nav-link '>
                    <span className='title'>Ver Produtos</span>
                  </Link>
                </li>

              </ul>
            </li>

            <li className='nav-item'>
              <a href='#' className='nav-link nav-toggle'>
                <i className='material-icons'>gif</i>
                <span className='title'>Contactos</span>
                <span className='arrow'></span>
              </a>
              <ul className='sub-menu'>
                <li className='nav-item'>
                <Link to='/verContactos' className='nav-link'>
                    <span className='title'>Ver</span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/novoContacto' className='nav-link '>
                    <span className='title'>Novo</span>
                  </Link>
                </li>

              </ul>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}
