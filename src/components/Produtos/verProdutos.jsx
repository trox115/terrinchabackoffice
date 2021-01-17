import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import _ from 'lodash';

function VerProdutos({ produtos, getProdutos }) {

  useEffect(() => {
    if (_.isEmpty(produtos.produtos)) {
      getProdutos();
    }
  }, [produtos, getProdutos]);

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
                        {
                          _.map(produtos.produtos, (produto) => {
                            return (
                              <tr>
                                <td key={produto.id}>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>
                                  {produto.descricao}
                                </td>
                                <td>{produto.ano}</td>
                                <td>{produto.preco} €</td>
                                <td>
                                  <a href='edit_booking.html' className='btn btn-tbl-edit btn-xs'>
                                    <i className='fa fa-pencil'></i>
                                  </a>
                                  <button className='btn btn-tbl-delete btn-xs'>
                                    <i className='fa fa-trash-o '></i>
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
    </div>
  )
}
const mapState = (state) => ({
  produtos: state.produtos,
});

const mapDispatch = dispatch => ({
  getProdutos: () => dispatch.produtos.loadProdutos(),
});

export default connect(mapState, mapDispatch)(VerProdutos);