import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

function EditarContactos({editarContacto, ...props}) {

  const [nome, setNome ] = useState('');
  const [telefone, setTelefone] = useState('');
console.log(props.history.location.query)
  useEffect(() => {
      if(nome=== ''){
          setNome(props.history.location.query.nome)
      }
      if(telefone=== ''){
        setTelefone(props.history.location.query.telefone)

      }
  }, [nome,props.history.location.query])

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
    editarContacto({nome,telefone, id: props.history.location.query.id})
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
                    <header>Editar Contacto</header>
                  </div>
                  <div className="card-body " id="bar-parent">
                    <form>
                      <div className="form-group">
                        <label for="simpleFormEmail">Nome do Contacto</label>
                        <input type="text" className="form-control" id="simpleFormEmail" placeholder="Insira o nome do contacto" name='nome' value={nome} onChange={handleChange}/>
                      </div>
                      <div className="form-group">
                        <label for="simpleFormPassword">Telefone/ Telemóvel</label>
                        <input type="text" className="form-control" id="simpleFormPassword" placeholder="Contacto" name='contacto' value={telefone} onChange={handleChange} />
                      </div>
                      
                      <button className="btn btn-primary" onClick={handleClick}>Editar</button>
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
  editarContacto: (obj) => dispatch.contactos.editarContacto(obj),
});
export default connect(null, mapDispatch)(EditarContactos)