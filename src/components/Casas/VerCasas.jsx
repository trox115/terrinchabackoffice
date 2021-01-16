import React from 'react'

export default function VerCasas() {
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
                              <th>Livre</th>
                              <th>Status</th>
                              <th>Editar</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Casa do Jardineiro</td>
                              <td>
                              <span className='label label-sm label-danger'></span>
                              </td>

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
                              
                              <td>
                              <span className='label label-sm label-success'></span>
                              </td>
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
                              <td>
                              <span className='label label-sm label-danger'></span>
                              </td>
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
                              <td>
                              <span className='label label-sm label-success'></span>
                              </td>
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
                              <td>
                              <span className='label label-sm label-success'></span>
                              </td>
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
                              <td>
                              <span className='label label-sm label-success'></span>
                              </td>
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
                              <td>
                              <span className='label label-sm label-success'></span>
                              </td>
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
                              <td>
                              <span className='label label-sm label-success'></span>
                              </td>
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
                            <tr>
                              <td>9</td>
                              <td>Casa da Palhas</td>
                              <td>
                              <span className='label label-sm label-success'></span>
                              </td>
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
                            <tr>
                              <td>10</td>
                              <td>Casa dos Bois</td>
                              <td>
                              <span className='label label-sm label-success'></span>
                              </td>
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
                            <tr>
                              <td>11</td>
                              <td>Casa do enxertador</td>
                              <td>
                              <span className='label label-sm label-success'></span>
                              </td>
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
                              <tr>
                              <td>12</td>
                              <td>Casa da Eira</td>
                              <td>
                              <span className='label label-sm label-success'></span>
                              </td>
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
                            <tr>
                              <td>13</td>
                              <td>Casa da Francela</td>
                              <td>
                              <span className='label label-sm label-success'></span>
                              </td>
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
                            <tr>
                              <td>14</td>
                              <td>Casa da Lenha</td>
                              <td>
                              <span className='label label-sm label-success'></span>
                              </td>
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
                            <tr>
                              <td>15</td>
                              <td>Casa dos Cavalos</td>
                              <td>
                              <span className='label label-sm label-success'></span>
                              </td>
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
                            <tr>
                              <td>16</td>
                              <td>Casa Mãe</td>
                              <td>
                              <span className='label label-sm label-success'></span>
                              </td>
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
    )
}
