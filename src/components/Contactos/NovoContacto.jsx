import { fromPairs } from 'lodash';
import React, { useState } from 'react'
import { connect } from 'react-redux';

function NovoContacto({novoContacto}) {

  const [nome, setNome ] = useState();
  const [telefone, setTelefone] = useState();
  
  const handleChange = (event) => {
    event.preventDefault();
    if(event.target.name === 'nome'){
      setNome(event.target.value);
    }
    else{
      setTelefone(event.target.value);

    }
  }

  const handleClick = (event) => {
    event.preventDefault();
    novoContacto({nome,telefone})
  }

  return (
    <div className="page-content-wrapper">
      <div className="page-content">
        <div className="page-bar">
          <div className="page-title-breadcrumb">
            <div className=" pull-left"></div>
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="card card-box">
                  <div className="card-head">
                    <header>Novo Contacto</header>
                  </div>
                  <div className="card-body " id="bar-parent">
                    <form>
                      <div className="form-group">
                        <label for="simpleFormEmail">Nome do Contacto</label>
                        <input type="text" className="form-control" id="simpleFormEmail" placeholder="Insira o nome do contacto" name='nome' onChange={handleChange}/>
                      </div>
                      <div className="form-group">
                        <label for="simpleFormPassword">Telefone/ Telemóvel</label>
                        <input type="text" className="form-control" id="simpleFormPassword" placeholder="Contacto" name='contacto' onChange={handleChange} />
                      </div>
                      
                      <button className="btn btn-primary" onClick={handleClick}>Gravar</button>
                    </form>
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
const mapDispatch = dispatch => ({
  novoContacto: (obj) => dispatch.contactos.novoContacto(obj),
});
export default connect(null, mapDispatch)(NovoContacto)