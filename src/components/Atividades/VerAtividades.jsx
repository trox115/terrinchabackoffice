/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect } from 'react'
import {connect } from 'react-redux';
import _ from 'lodash';

function VerAtividades({atividades, getAtividades}) {
  useEffect(() => {
    if(_.isEmpty(atividades.atividades)){
      getAtividades();
    }
  }, [atividades, getAtividades]);
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
                      {
                        _.map(atividades.atividades, (atividade) => {
                          return(
                            <tr className="odd gradeX" key={atividade.id}>
                            <td className="user-circle-img">
                              <img src="assets/img/user/user1.jpg" alt="" />
                            </td>
                            <td className="center">{atividade.id}</td>
                            <td className="center">{atividade.nome}</td>
                            <td className="center">
                              {
                                _.map(atividade.itens, (item, index) => {
                                  return(
                                    <span key={index}>{item}, </span>
                                  )
                                })
                              }
                              </td>
                            <td className="center">{atividade.preco} €</td>
    
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
  atividades: state.atividades,
});

const mapDispatch = dispatch => ({
  getAtividades: () => dispatch.atividades.loadAtividades(),
});

export default connect(mapState, mapDispatch)(VerAtividades)