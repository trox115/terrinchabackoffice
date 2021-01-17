/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import _ from 'lodash';

function VerEncomendas({ getEncomendas, encomendas, produtos, getProdutos, users, getClientes }) {

  useEffect(() => {
    if (_.isEmpty(encomendas.encomendas)) {
      getEncomendas();
    }

    if (_.isEmpty(produtos.produtos)) {
      getProdutos();
    }

    if (_.isEmpty(users.users)) {
      getClientes();
    }
  }, [encomendas, getEncomendas, users, getClientes, produtos, getProdutos]);

  return (
    <div className="page-content-wrapper">
      <div className="page-content">
        <div className="page-bar">
          <div className="page-title-breadcrumb">
            <div className=" pull-left">
              <div className="page-title">Encomendas</div>
            </div>
            <ol className="breadcrumb page-breadcrumb pull-right">
              <li><i className="fa fa-home"></i>&nbsp;<a className="parent-item" href="index.html">Home</a>&nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li><a className="parent-item" href="">Apps</a>&nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li className="active">Encomendas</li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-9 col-lg-9">
            <div className="card card-box">
              <div className="card-head">
                <header>Lista de Encomendas</header>
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
                        <th className="center"> Cliente </th>
                        <th className="center"> Produto </th>
                        <th className="center"> Quantidade</th>
                        <th className="center"> Total</th>
                        <th className="center"> Editar</th>

                      </tr>
                    </thead>
                    <tbody>

                      {
                        _.map(encomendas.encomendas, (encomenda) => {
                          const userIndex = _.findIndex(users.users, { id: encomenda.cliente_id })
                          const productIndex = _.findIndex(produtos.produtos, { id: encomenda.produto_id })
                          const total = produtos.produtos[productIndex].preco * encomenda.quantidade
                          return (
                            <tr className="odd gradeX">
                              <td className="user-circle-img">
                                <img src="assets/img/user/user1.jpg" alt="" />
                              </td>
                              <td className="center">{users.users[userIndex].name}</td>
                              <td className="center">{produtos.produtos[productIndex].nome}	 </td>
                              <td className="center">{encomenda.quantidade}</td>
                              <td className="center">{total} €</td>

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
  encomendas: state.encomendas,
  produtos: state.produtos,
  users: state.users
});

const mapDispatch = dispatch => ({
  getEncomendas: () => dispatch.encomendas.loadEncomendas(),
  getProdutos: () => dispatch.produtos.loadProdutos(),
  getClientes: () => dispatch.users.loadClientes()
});

export default connect(mapState, mapDispatch)(VerEncomendas);