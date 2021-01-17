import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

function ProdutosParaEntrega({menus, getMenus}) {

  useEffect(() => {
    if(_.isEmpty(menus.menus)){
      getMenus();
    }
    console.log(menus)
  }, [menus, getMenus]);
    return (
        <div className="page-content-wrapper">
      <div className="page-content">
        <div className="page-bar">
          <div className="page-title-breadcrumb">
            <div className=" pull-left">
              <div className="page-title">Produtos Para Entrega</div>
            </div>
            <ol className="breadcrumb page-breadcrumb pull-right">
              <li><i className="fa fa-home"></i>&nbsp;<a className="parent-item" href="index.html">Home</a>&nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li><a className="parent-item" href="">Apps</a>&nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li className="active">Produtos Para Entrega</li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="card card-box">
              <div className="card-head">
                <header>Lista de Produtos Para Entrega</header>
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
                        <th className="center"> Ingredientes</th>
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
                        <td className="center">Sandwich Club</td>
                        <td className="center">Alface, Tomate, Ovo Estrelado, Fiambre, Queijo. Batata Frita</td>
                        <td className="center">7 €</td>

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
                        <td className="center">Sandwich Atum</td>
                        <td className="center">Alface, Tomate, Pasta de Atum, Milho, Ovo Cozido. Batata Frita</td>
                        <td className="center">7 €</td>

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
                        <td className="center">3</td>
                        <td className="center">Sandwich do Campo</td>
                        <td className="center">Alface, Tomate, Bife de Frango Grelhado, Milho, Ovo Cozido. Batata Frita</td>
                        <td className="center">7 €</td>

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

const mapState = (state) => ({
  menus: state.menus,
});

const mapDispatch = dispatch => ({
  getMenus: () => dispatch.menus.loadMenus(),
});

export default connect(mapState, mapDispatch)(ProdutosParaEntrega);
