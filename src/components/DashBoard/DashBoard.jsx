import React from 'react';

export default function DashBoard() {
  return (

      
        
        <div className='page-content-wrapper'>
          <div className='page-content'>
            <div className='page-bar'>
              <div className='page-title-breadcrumb'>
                <div className=' pull-left'>
                  <div className='page-title'>Dashboard</div>
                </div>
                <ol className='breadcrumb page-breadcrumb pull-right'>
                  <li>
                    <i className='fa fa-home'></i>&nbsp;
                    <a className='parent-item' href='index.html'>
                      Home
                    </a>
                    &nbsp;<i className='fa fa-angle-right'></i>
                  </li>
                  <li className='active'>Dashboard</li>
                </ol>
              </div>
            </div>
            <div className='state-overview'>
              <div className='row'>
                <div className='col-xl-3 col-md-6 col-12'>
                  <div className='info-box bg-blue'>
                    <span className='info-box-icon push-bottom'>
                      <i className='material-icons'>style</i>
                    </span>
                    <div className='info-box-content'>
                      <span className='info-box-text'>Reservas</span>
                      <span className='info-box-number'>15</span>
                      <div className='progress'>
                        <div className='progress-bar width-60'></div>
                      </div>
                      <span className='progress-description'>60% + nos últimos 28 dias</span>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-md-6 col-12'>
                  <div className='info-box bg-orange'>
                    <span className='info-box-icon push-bottom'>
                      <i className='material-icons'>card_travel</i>
                    </span>
                    <div className='info-box-content'>
                      <span className='info-box-text'>Compras</span>
                      <span className='info-box-number'>155</span>
                      <div className='progress'>
                        <div className='progress-bar width-40'></div>
                      </div>
                      <span className='progress-description'>40% + nos últimos 3 dias</span>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-md-6 col-12'>
                  <div className='info-box bg-purple'>
                    <span className='info-box-icon push-bottom'>
                      <i className='material-icons'>phone_in_talk</i>
                    </span>
                    <div className='info-box-content'>
                      <span className='info-box-text'>+ Estatisticas que queiras</span>
                      <span className='info-box-number'>52</span>
                      <div className='progress'>
                        <div className='progress-bar width-80'></div>
                      </div>
                      <span className='progress-description'></span>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-md-6 col-12'>
                  <div className='info-box bg-success'>
                    <span className='info-box-icon push-bottom'>
                      <i className='material-icons'>monetization_on</i>
                    </span>
                    <div className='info-box-content'>
                      <span className='info-box-text'>Total de ganhos</span>
                      <span className='info-box-number'>13,921</span>
                      <span>€</span>
                      <div className='progress'>
                        <div className='progress-bar width-60'></div>
                      </div>
                      <span className='progress-description'>20% + que no ano passado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4 col-sm-12 col-12'>
                <div className='card bg-info'>
                  <div className='text-white py-3 px-4'>
                    <h6 className='card-title text-white mb-0'>Novas compras</h6>
                    <p>10</p>
                    <div id='sparkline26'></div>
                    <small className='text-white'>Ver detalhes</small>
                  </div>
                </div>
                <div className='card bg-success'>
                  <div className='text-white py-3 px-4'>
                    <h6 className='card-title text-white mb-0'>Ganhos</h6>
                    <p>3669.25</p>
                    <div id='sparkline27'></div>
                    <small className='text-white'>Ver detalhes</small>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-12 col-12'>
                <div className='card  card-box'>
                  <div className='card-head'>
                    <header>Notificações</header>
                    <div className='tools'>
                      <a className='fa fa-repeat btn-color box-refresh' href='javascript:;'></a>
                      <a
                        className='t-collapse btn-color fa fa-chevron-down'
                        href='javascript:;'
                      ></a>
                      <a className='t-close btn-color fa fa-times' href='javascript:;'></a>
                    </div>
                  </div>
                  <div className='card-body no-padding height-9'>
                    <div className='row'>
                      <div className='noti-information notification-menu'>
                        <div className='notification-list mail-list not-list small-slimscroll-style'>
                          <a href='javascript:;' className='single-mail'>
                            {' '}
                            <span className='icon bg-primary'>
                              {' '}
                              <i className='fa fa-user-o'></i>
                            </span>{' '}
                            <span className='text-purple'>António Fernandes</span> comprou nova garrafa da terrincha
                            <span className='notificationtime'>
                              <small>Agora</small>
                            </span>
                          </a>
                          <a href='javascript:;' className='single-mail'>
                            {' '}
                            <span className='icon blue-bgcolor'>
                              {' '}
                              <i className='fa fa-envelope-o'></i>
                            </span>{' '}
                            <span className='text-purple'>António Fernandes</span> Marcou pequeno almoço para as 10
                            <span className='notificationtime'>
                              <small>Agora</small>
                            </span>
                          </a>
                          
                        </div>
                        <div className='full-width text-center p-t-10'>
                          <button
                            type='button'
                            className='btn purple btn-outline btn-circle margin-0'
                          >
                            Ver todas
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-12 col-12'>
                <div className='card  card-box'>
                  <div className='card-head'>
                    <header>Ganhos</header>
                    <div className='tools'>
                      <a className='fa fa-repeat btn-color box-refresh' href='javascript:;'></a>
                      <a
                        className='t-collapse btn-color fa fa-chevron-down'
                        href='javascript:;'
                      ></a>
                      <a className='t-close btn-color fa fa-times' href='javascript:;'></a>
                    </div>
                  </div>
                  <div className='card-body no-padding height-9'>
                    <div className='row text-center'>
                      <div className='col-sm-4 col-6'>
                        <h4 className='margin-0'> 209 €</h4>
                        <p className='text-muted'> Hoje</p>
                      </div>
                      <div className='col-sm-4 col-6'>
                        <h4 className='margin-0'>837 €</h4>
                        <p className='text-muted'>Esta semana</p>
                      </div>
                      <div className='col-sm-4 col-6'>
                        <h4 className='margin-0'> 3410 €</h4>
                        <p className='text-muted'>Este mês</p>
                      </div>
                    </div>
                    <div className='row'>
                      <div id='donut_chart' className='width-100 height-250'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12 col-sm-12'>
                <div className='card  card-box'>
                  <div className='card-head'>
                    <header>Reservas</header>
                    <div className='tools'>
                      <a className='fa fa-repeat btn-color box-refresh' href='javascript:;'></a>
                      <a
                        className='t-collapse btn-color fa fa-chevron-down'
                        href='javascript:;'
                      ></a>
                      <a className='t-close btn-color fa fa-times' href='javascript:;'></a>
                    </div>
                  </div>
                  <div className='card-body '>
                    <div className='table-wrap'>
                      <div className='table-responsive'>
                        <table className='table display product-overview mb-30' id='support_table5'>
                          <thead>
                            <tr>
                              <th>No</th>
                              <th>Nome</th>
                              <th>Check In</th>
                              <th>Check Out</th>
                              <th>Status</th>
                              <th>Telefone</th>
                              <th>Tipo de quarto</th>
                              <th>Editar</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>António Fernandes</td>
                              <td>23/05/2019</td>
                              <td>27/05/2020</td>
                              <td>
                                <span className='label label-sm label-success'>Pago</span>
                              </td>
                              <td>123456789</td>
                              <td>Single</td>
                              <td>
                                <a href='edit_booking.html' className='btn btn-tbl-edit btn-xs'>
                                  <i className='fa fa-pencil'></i>
                                </a>
                                <button className='btn btn-tbl-delete btn-xs'>
                                  <i className='fa fa-trash-o '></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Mark Hay</td>
                              <td>24/05/2017</td>
                              <td>26/05/2017</td>
                              <td>
                                <span className='label label-sm label-warning'>Não pago </span>
                              </td>
                              <td>123456789</td>
                              <td>Double</td>
                              <td>
                                <a href='edit_booking.html' className='btn btn-tbl-edit btn-xs'>
                                  <i className='fa fa-pencil'></i>
                                </a>
                                <button className='btn btn-tbl-delete btn-xs'>
                                  <i className='fa fa-trash-o '></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>Anthony Davie</td>
                              <td>17/05/2016</td>
                              <td>21/05/2016</td>
                              <td>
                                <span className='label label-sm label-success '>Não pago</span>
                              </td>
                              <td>123456789</td>
                              <td>Queen</td>
                              <td>
                                <a href='edit_booking.html' className='btn btn-tbl-edit btn-xs'>
                                  <i className='fa fa-pencil'></i>
                                </a>
                                <button className='btn btn-tbl-delete btn-xs'>
                                  <i className='fa fa-trash-o '></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>David Perry</td>
                              <td>19/04/2016</td>
                              <td>20/04/2016</td>
                              <td>
                                <span className='label label-sm label-danger'>Não pago</span>
                              </td>
                              <td>123456789</td>
                              <td>King</td>
                              <td>
                                <a href='edit_booking.html' className='btn btn-tbl-edit btn-xs'>
                                  <i className='fa fa-pencil'></i>
                                </a>
                                <button className='btn btn-tbl-delete btn-xs'>
                                  <i className='fa fa-trash-o '></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>Anthony Davie</td>
                              <td>21/05/2016</td>
                              <td>24/05/2016</td>
                              <td>
                                <span className='label label-sm label-success '>Pago</span>
                              </td>
                              <td>123456789</td>
                              <td>Single</td>
                              <td>
                                <a href='edit_booking.html' className='btn btn-tbl-edit btn-xs'>
                                  <i className='fa fa-pencil'></i>
                                </a>
                                <button className='btn btn-tbl-delete btn-xs'>
                                  <i className='fa fa-trash-o '></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>Alan Gilchrist</td>
                              <td>15/05/2016</td>
                              <td>22/05/2016</td>
                              <td>
                                <span className='label label-sm label-warning '>não pago</span>
                              </td>
                              <td>123456789</td>
                              <td>King</td>
                              <td>
                                <a href='edit_booking.html' className='btn btn-tbl-edit btn-xs'>
                                  <i className='fa fa-pencil'></i>
                                </a>
                                <button className='btn btn-tbl-delete btn-xs'>
                                  <i className='fa fa-trash-o '></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>7</td>
                              <td>Mark Hay</td>
                              <td>17/06/2016</td>
                              <td>18/06/2016</td>
                              <td>
                                <span className='label label-sm label-success '>pago</span>
                              </td>
                              <td>123456789</td>
                              <td>Single</td>
                              <td>
                                <a href='edit_booking.html' className='btn btn-tbl-edit btn-xs'>
                                  <i className='fa fa-pencil'></i>
                                </a>
                                <button className='btn btn-tbl-delete btn-xs'>
                                  <i className='fa fa-trash-o '></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>8</td>
                              <td>Sue Woodger</td>
                              <td>15/05/2016</td>
                              <td>17/05/2016</td>
                              <td>
                                <span className='label label-sm label-danger'>não pago</span>
                              </td>
                              <td>123456789</td>
                              <td>Double</td>
                              <td>
                                <a href='edit_booking.html' className='btn btn-tbl-edit btn-xs'>
                                  <i className='fa fa-pencil'></i>
                                </a>
                                <button className='btn btn-tbl-delete btn-xs'>
                                  <i className='fa fa-trash-o '></i>
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-12 col-sm-12'>
                <div className='card  card-box'>
                  <div className='card-head'>
                    <header>Casas</header>
                    <div className='tools'>
                      <a className='fa fa-repeat btn-color box-refresh' href='javascript:;'></a>
                      <a
                        className='t-collapse btn-color fa fa-chevron-down'
                        href='javascript:;'
                      ></a>
                      <a className='t-close btn-color fa fa-times' href='javascript:;'></a>
                    </div>
                  </div>
                  <div className='card-body '>
                    <div className='table-wrap'>
                      <div className='table-responsive'>
                        <table className='table display product-overview mb-30' id='support_table5'>
                          <thead>
                            <tr>
                              <th>No</th>
                              <th>Nome</th>
                              <th>Check Out</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Casa do Jardineiro</td>
                              <td>27/05/2020</td>
                              <td>
                                <span className='label label-sm label-success'>Limpa</span>
                              </td>
                              <td>
                                <a href='edit_booking.html' className='btn btn-tbl-edit btn-xs'>
                                  <i className='fa fa-pencil'></i>
                                </a>
                                <button className='btn btn-tbl-delete btn-xs'>
                                  <i className='fa fa-trash-o '></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Casa da criada</td>
                              <td>26/05/2017</td>
                              <td>
                                <span className='label label-sm label-warning'>A limpar </span>
                              </td>
                              <td>
                                <a href='edit_booking.html' className='btn btn-tbl-edit btn-xs'>
                                  <i className='fa fa-pencil'></i>
                                </a>
                                <button className='btn btn-tbl-delete btn-xs'>
                                  <i className='fa fa-trash-o '></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>Casa do azeiteiro</td>
                              <td>21/05/2016</td>
                              <td>
                                <span className='label label-sm label-success '>Limpa</span>
                              </td>
                              <td>
                                <a href='edit_booking.html' className='btn btn-tbl-edit btn-xs'>
                                  <i className='fa fa-pencil'></i>
                                </a>
                                <button className='btn btn-tbl-delete btn-xs'>
                                  <i className='fa fa-trash-o '></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>Casa do Ceifeiro</td>
                              <td>20/04/2016</td>
                              <td>
                                <span className='label label-sm label-danger'>Não limpa</span>
                              </td>
                              <td>
                                <a href='edit_booking.html' className='btn btn-tbl-edit btn-xs'>
                                  <i className='fa fa-pencil'></i>
                                </a>
                                <button className='btn btn-tbl-delete btn-xs'>
                                  <i className='fa fa-trash-o '></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>Casa do Podador</td>
                              <td>24/05/2016</td>
                              <td>
                                <span className='label label-sm label-success '>Limpa</span>
                              </td>
                              <td>
                                <a href='edit_booking.html' className='btn btn-tbl-edit btn-xs'>
                                  <i className='fa fa-pencil'></i>
                                </a>
                                <button className='btn btn-tbl-delete btn-xs'>
                                  <i className='fa fa-trash-o '></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>Casa do caseiro</td>
                              <td>22/05/2016</td>
                              <td>
                                <span className='label label-sm label-warning '>A Limpar</span>
                              </td>
                              <td>
                                <a href='edit_booking.html' className='btn btn-tbl-edit btn-xs'>
                                  <i className='fa fa-pencil'></i>
                                </a>
                                <button className='btn btn-tbl-delete btn-xs'>
                                  <i className='fa fa-trash-o '></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>7</td>
                              <td>Casa do Guarda</td>
                              <td>18/06/2016</td>
                              <td>
                                <span className='label label-sm label-success '>Limpa</span>
                              </td>
                              <td>
                                <a href='edit_booking.html' className='btn btn-tbl-edit btn-xs'>
                                  <i className='fa fa-pencil'></i>
                                </a>
                                <button className='btn btn-tbl-delete btn-xs'>
                                  <i className='fa fa-trash-o '></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>8</td>
                              <td>Casa do Pastor</td>
                              <td>17/05/2016</td>
                              <td>
                                <span className='label label-sm label-danger'>não limpa</span>
                              </td>
                              <td>
                                <a href='edit_booking.html' className='btn btn-tbl-edit btn-xs'>
                                  <i className='fa fa-pencil'></i>
                                </a>
                                <button className='btn btn-tbl-delete btn-xs'>
                                  <i className='fa fa-trash-o '></i>
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

      
);
}
