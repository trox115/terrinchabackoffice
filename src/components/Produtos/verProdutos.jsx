import React from 'react'

export default function verProdutos() {
  return (
    <div className="page-content-wrapper">
      <div className="page-content">
        <div className="page-bar">
          <div className="page-title-breadcrumb">
            <div className=" pull-left">
              <div className="page-title">Ver casas</div>
            </div>
            <ol className="breadcrumb page-breadcrumb pull-right">
              <li><i className="fa fa-home"></i>&nbsp;<a className="parent-item" href="index.html">Home</a>&nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li><a className="parent-item" href="">Apps</a>&nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li className="active">Casas</li>
            </ol>
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
                          <th>Descrição</th>
                          <th>Ano</th>
                          <th>Preço</th>
                          <th>Editar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Quinta da Terrincha</td>
                          <td>
                          Doc Douro Tinto	
                          </td>
                          <td>2013</td>
                          <td>7 €</td>
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
                          <td>Terrincha</td>
                          <td>
                            DOC douro Branco
                          </td>
                          <td>2018</td>
                          <td>7 €</td>
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
                          <td>Terrincha</td>
                          <td>
                            DOC Douro Rosé
                          </td>
                          <td>2018</td>
                          <td>6 €</td>
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
                          <td>Terras da vilariça</td>
                          <td>
                            DOC Douro Tinto
                          </td>
                          <td>2015</td>
                          <td>6 €</td>
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
                          <td>Terrincha Reserva</td>
                          <td>
                            Doc Douro Tinto
                          </td>
                          <td>2016</td>
                          <td>12 €</td>
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
                          <td>Quinta da Terrincha</td>
                          <td>
                            DOC Douro Branco
                          </td>
                          <td>LT-15 2015	</td>
                          <td>15 €</td>
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
                          <td>Terrincha</td>
                          <td>
                            DOC Douro Branco
                          </td>
                          <td>B-16 2016		</td>
                          <td>15 €</td>
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
                          <td>Terrincha Reserva	</td>
                          <td>
                          DOC Douro Branco
                          </td>
                          <td>2015	</td>
                          <td>25 €</td>
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
  )
}
