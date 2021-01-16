import React from 'react'

export default function VerMenus() {
    return (
        <div className="page-content-wrapper">
        <div className="page-content">
          <div className="page-bar">
            <div className="page-title-breadcrumb">
              <div className=" pull-left">
                <div className="page-title">Menus</div>
              </div>
              <ol className="breadcrumb page-breadcrumb pull-right">
                <li><i className="fa fa-home"></i>&nbsp;<a className="parent-item" href="index.html">Home</a>&nbsp;<i className="fa fa-angle-right"></i>
                </li>
                <li><a className="parent-item" href="">Apps</a>&nbsp;<i className="fa fa-angle-right"></i>
                </li>
                <li className="active">Menus</li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="card card-box">
                <div className="card-head">
                  <header>Lista de Menus</header>
                  <div className="tools">
                    <a className="fa fa-repeat btn-color box-refresh" href="javascript:;"></a>
                    <a className="t-collapse btn-color fa fa-chevron-down" href="javascript:;"></a>
                    <a className="t-close btn-color fa fa-times" href="javascript:;"></a>
                  </div>
                </div>
                <div className="card-body ">
                  <div className="table-scrollable">
                    <table className="table table-hover table-checkable order-column full-width" id="example4">
                      <thead>
                        <tr>
                          <th className="center"></th>
                          <th className="center"> No </th>
                          <th className="center"> Nome </th>
                          <th className="center"> Entradas</th>
                          <th className="center"> Principal</th>
                          <th className="center"> Sobremesas</th>
                          <th className="center"> Bebidas</th>
                          
                          <th className="center"> Custo</th>
  
                          <th className="center"> Editar</th>
  
                        </tr>
                      </thead>
                      <tbody>
                      <tr className="odd gradeX">
                          <td className="user-circle-img">
                            <img src="assets/img/user/user1.jpg" alt="" />
                          </td>
                          <td className="center">1</td>
                          <td className="center">Proposta 1</td>
                          <td className="center">Entradas Regionais</td>

                          <td className="center">Arroz de Pato com laranja/ Bacalhau Assado</td>
                          <td className="center">Doces/ Fruta da Época</td>
                          <td className="center">Tinto Terrincha Colheita, Terrincha Rosé Terrincha Branco, Águas, Refrigerantes, Café</td>
                          <td> 30 e</td>

  
                          <td className="center">
                            <a href="edit_booking.html" className="btn btn-tbl-edit btn-xs">
                              <i className="fa fa-pencil"></i>
                            </a>
                            <button className="btn btn-tbl-delete btn-xs">
                              <i className="fa fa-trash-o "></i>
                            </button>
                          </td>
                        </tr>
                        <tr className="odd gradeX">
                          <td className="user-circle-img">
                            <img src="assets/img/user/user1.jpg" alt="" />
                          </td>
                          <td className="center">2</td>
                          <td className="center">Proposta 2</td>
                          <td className="center">Entradas Regionais</td>

                          <td className="center">Posta Vitela/Polvo Afogado em Azeite</td>
                          <td className="center">Doces/ Fruta da Época</td>
                          <td className="center">Tinto Terrincha Colheita, Terrincha Rosé Terrincha Branco, Águas, Refrigerantes, Café</td>
                          <td className="center">35 €</td>

  
                          <td className="center">
                            <a href="edit_booking.html" className="btn btn-tbl-edit btn-xs">
                              <i className="fa fa-pencil"></i>
                            </a>
                            <button className="btn btn-tbl-delete btn-xs">
                              <i className="fa fa-trash-o "></i>
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
    )
}
