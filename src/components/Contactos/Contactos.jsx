import React from 'react'

export default function Contactos() {
    return (
        <div className="page-content-wrapper">
        <div className="page-content">
          <div className="page-bar">
            <div className="page-title-breadcrumb">
              <div className=" pull-left">
                <div className="page-title">Contactos Úteis</div>
              </div>
              <ol className="breadcrumb page-breadcrumb pull-right">
                <li><i className="fa fa-home"></i>&nbsp;<a className="parent-item" href="index.html">Home</a>&nbsp;<i className="fa fa-angle-right"></i>
                </li>
                <li><a className="parent-item" href="">Apps</a>&nbsp;<i className="fa fa-angle-right"></i>
                </li>
                <li className="active">Contactos Úteis</li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-9 col-lg-9">
              <div className="card card-box">
                <div className="card-head">
                  <header>Contactos Úteis</header>
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
                          <th className="center"> Nome </th>
                          <th className="center"> Contacto </th>
                          <th className="center"> Editar</th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr className="odd gradeX">
                          <td className="user-circle-img">
                            <img src="assets/img/user/user1.jpg" alt="" />
                          </td>
                          <td className="center">GNR de Moncorvo</td>
                          <td className="center">279 254 115</td>
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
                          <td className="center">Bombeiros de Moncorvo</td>
                          <td className="center">279 200 200</td>
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
                          <td className="center">Centro de saúde de Foz Côa</td>
                          <td className="center">279 760 050</td>
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
                          <td className="center">Contacto de Emergência Quinta da Terrincha</td>
                          <td className="center">915 946 705</td>
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
