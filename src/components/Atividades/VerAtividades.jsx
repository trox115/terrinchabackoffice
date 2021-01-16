import React from 'react'

export default function VerAtividades() {
  return (
    <div className="page-content-wrapper">
      <div className="page-content">
        <div className="page-bar">
          <div className="page-title-breadcrumb">
            <div className=" pull-left">
              <div className="page-title">Atividades</div>
            </div>
            <ol className="breadcrumb page-breadcrumb pull-right">
              <li><i className="fa fa-home"></i>&nbsp;<a className="parent-item" href="index.html">Home</a>&nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li><a className="parent-item" href="">Apps</a>&nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li className="active">Atividades</li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="card card-box">
              <div className="card-head">
                <header>Lista de Atividades</header>
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
                        <th className="center"> itens</th>
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
                        <td className="center">Prova Rústica</td>
                        <td className="center">Pão Regional
                        Água Mineral
                        Queijo de ovelha Terrincha Meia Cura
                        Azeite Virgem Extra
                        Vinho Quinta da Terrincha Doc Douro Branco
                        Vinho Quinta da Terrincha Doc Douro Rosé
                        Vinho Quinta da Terrincha Doc Douro Tinto
Vinho Terras da Vilariça Doc Douro Tinto</td>
                        <td className="center">10 €</td>

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
                        <td className="center">Prova Vintage</td>
                        <td className="center">Pão Regional
Bola de Carne Caseira
Água Mineral
Variedade de Compotas da Terrincha
Queijo de ovelha Terrincha Meia Cura
Azeite Virgem Extra
Vinho Quinta da Terrincha Doc Douro Branco
Vinho Quinta da Terrincha Doc Douro Rosé
Vinho Quinta da Terrincha Doc Douro Tinto
Vinho Quinta da Terrincha Tinto Lote T14</td>
                        <td className="center">15 €</td>

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
