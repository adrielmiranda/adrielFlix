import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormFilde from '../../../components/FormFilde';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(valoresIniciais);

  const setValue = (chave, valor) => {

    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handlerChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
      //const { getAttribute, value } = infosDoEvento.target;
      // setValue(
      // getAttribute('nome'),
      //  value
    );
  }

  useEffect(() => {
    console.log('alô alô Brazil');
    const URL = 'http://localhost:8081/categorias';
    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([ 
          ...resposta,
        ]);
      });


    //    setTimeout(() => {
    //      setCategorias([
    //        ...categorias,
    //          {
    //            "id": 1,
    //            "nome": "Front end",
    //            "descricao": "Uma categoria show",
    //            "cor": "#cdb1ff"
    //          },
    //          {
    //            "id": 2,
    //            "nome": "Back end",
    //            "descricao": "Outra categoria show",
    //            "cor": "#cdb1ff"
    //          }
    //      ]);
    //    }, 4 * 1000);
  }, []);


  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handlerSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);
        setValues(valoresIniciais);
      }}>


        <FormFilde
          label="Nome categoria"
          name="nome"
          value={values.nome}
          onChange={handlerChange}
        />

        <FormFilde
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handlerChange}
        />

        <FormFilde
          label="cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handlerChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}


      <ul>
        {categorias.map((categoria) => {
          return (
            <li key={`${categoria.nome}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;