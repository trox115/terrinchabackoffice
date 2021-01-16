/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import classNames from 'classnames';


function VerCasas({casas, getCasas}) {

  useEffect(() => {
    if(_.isEmpty(casas.casas)){
      getCasas();
    }
  }, [casas, getCasas]);
  console.log(casas)
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

                            {
                              _.map(casas.casas, (casa, index) => {
                                console.log(casa)
                                return (
                                  <tr key={index}>
                              <td>{index}</td>
                              <td>{casa.nome}</td>
                              <td>
                              <span className={classNames ({
                                'label label-sm label-danger': !casa.limpa || casa.ocupada,
                                'label label-sm label-success': casa.limpa && !casa.ocupada
                                })}></span>
                              </td>

                              <td>
                              <span className={classNames({
                                'label label-sm label-success' : casa.limpa,
                                'label label-sm label-danger': !casa.limpa
                                })}>{casa.limpa ? 'Limpa' : 'Suja' }</span>
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
  casas: state.casas,
});

const mapDispatch = dispatch => ({
  getCasas: () => dispatch.casas.loadCasas(),
});

export default connect(mapState, mapDispatch)(VerCasas);
