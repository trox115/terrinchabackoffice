import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import _ from 'lodash';
import Moment from 'react-moment';


function VerPA({ getPalmocos, palmocos, getCasas, casas, getUsers, users }) {

  useEffect(async () => {

    if (_.isEmpty(casas.casas)) {
      await getCasas();
    }

    if (_.isEmpty(users.users)) {
      await getUsers();
    }
    if (_.isEmpty(palmocos.palmocos)) {
      getPalmocos();
    }
  }, [palmocos, casas, users, getCasas, getPalmocos, getUsers]);
  return (
    <div className="page-content-wrapper">
      <div className="page-content">
        <div className="page-bar">
          <div className="page-title-breadcrumb">
            <div className=" pull-left">
              <div className="page-title">Pequenos Almoços</div>
            </div>
            <ol className="breadcrumb page-breadcrumb pull-right">
              <li><i className="fa fa-home"></i>&nbsp;<a className="parent-item" href="index.html">Home</a>&nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li><a className="parent-item" href="">Apps</a>&nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li className="active">Pequenos Almoços</li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-9 col-lg-9">
            <div className="card card-box">
              <div className="card-head">
                <header>Lista de Pequenos Almoços</header>
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
                        <th className="center"> Casa </th>
                        <th className="center"> Cliente</th>
                        <th className="center"> Hora</th>

                        <th className="center"> Editar</th>

                      </tr>
                    </thead>
                    <tbody>
                      {
                        _.map(palmocos.palmocos, (palmoco, index) => {
                          const casaIndex = _.findIndex(casas.casas, { id: palmoco.casa_id })
                          const userIndex = _.findIndex(users.users, { id: palmoco.cliente_id })
                          return (
                            <tr className="odd gradeX">
                              <td className="user-circle-img" key={index}>
                                <img src="assets/img/user/user1.jpg" alt="" />
                              </td>
                              <td className="center">{index}</td>
                              <td className="center">{casas.casas[casaIndex].nome}</td>
                              <td className="center">{users.users[userIndex].name}</td>
                              <td className="center">
                                <Moment format="DD/MM HH:mm">
                                  {palmoco.horas}
                                </Moment>
                              </td>

                              <td className="center">
                                <a href="edit_booking.html" className="btn btn-tbl-edit btn-xs">
                                  <i className="fa fa-pencil"></i>
                                </a>
                                <button className="btn btn-tbl-delete btn-xs">
                                  <i className="fa fa-trash-o "></i>
                                </button>
                              </td>
                            </tr>

                          )
                        })
                      }


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

const mapState = (state) => ({
  palmocos: state.palmocos,
  users: state.users,
  casas: state.casas
});

const mapDispatch = dispatch => ({
  getPalmocos: () => dispatch.palmocos.loadPalmocos(),
  getUsers: () => dispatch.users.loadClientes(),
  getCasas: () => dispatch.casas.loadCasas()
});

export default connect(mapState, mapDispatch)(VerPA)