import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'


const App = () => {

  const fetchAddress = async () => {
    const address = await axios.get(`https://viacep.com.br/ws/${form.cep}/json/`);
    setForm({ ...form, localidade: address.data.localidade });
  }

  const createCandidate = async (candidate) => {
      const user = await axios.post('http://localhost:5000/register', form);
      try {
        if(user.status === 200) {
          alert('Success!!');
        }
      } catch (error) {
        alert('Error!!'); 
      }              
  }
    

  const [form, setForm] = useState({
    name: '',
    position: '',
    birthdate: '',
    maritalstatus: '',
    gender: '',
    address: '',
    district: '',
    localidade: '',
    cep: '',
    phone1: '',
    phone2: '',
    mobile: '',
    contact: '',
    email: '',
    id: '',
    cpf: '',
    vehicle: '',
    license: ''
  })

  // const [cpfError, setCpfError] = useState(false);

  useEffect(() => {
    console.log(form);
  }, [form])


  return (
    <div>
      <h1>JobsNET - Banco de Currículos</h1>
      <div>
        <label htmlFor="name">Nome Completo * </label>
        <FormInput onChange={(e) => setForm({ ...form, name: e.target.value })} value={form.name}/>
      </div>
      <div>
        <label htmlFor="position">Cargo Pretendido </label>
        <FormInput onChange={(e) => setForm({ ...form, position: e.target.value })} value={form.position}/>
      </div>
      <div>
        <label htmlFor="birthdate">Data de Nascimento * </label>
        <FormInput onChange={(e) => setForm({ ...form, birthdate: e.target.value })} value={form.birthdate}/>
      </div>
      <div>
        <label htmlFor="maritalstatus">Estado Civil </label>
        <FormInput onChange={(e) => setForm({ ...form, maritalstatus: e.target.value })} value={form.maritalstatus}/>
      </div>
      <div>
        <label htmlFor="gender">Gênero </label>
        <FormInput onChange={(e) => setForm({ ...form, gender: e.target.value })} value={form.gender}/>
      </div>
      <div>
        <label htmlFor="address">Endereço * </label>
        <FormInput onChange={(e) => setForm({ ...form, address: e.target.value })} value={form.address} />
      </div>
      <div>
        <label htmlFor="district">Bairro * </label>
        <FormInput onChange={(e) => setForm({ ...form, district: e.target.value })} value={form.district} />
      </div>
      <div>
        <label htmlFor="localidade">Cidade * </label>
        <FormInput onChange={(e) => setForm({ ...form, localidade: e.target.value })} value={form.localidade} />
      </div>
      <div>
        <label htmlFor="cep">Cep </label>
        <FormInput  onBlur={() => {fetchAddress()}} onChange={(e) => setForm({ ...form, cep: e.target.value })} value={form.cep}/>
      </div>
      <div>
        <label htmlFor="phone1">Telefone Fixo 1 </label>
        <FormInput onChange={(e) => setForm({ ...form, phone1: e.target.value })} value={form.phone1}/>
      </div>
      <div>
        <label htmlFor="phone2">Telefone Fixo 2 </label>
        <FormInput onChange={(e) => setForm({ ...form, phone2: e.target.value })} value={form.phone2}/>
      </div>
      <div>
        <label htmlFor="mobile">Celular </label>
        <FormInput onChange={(e) => setForm({ ...form, mobile: e.target.value })} value={form.mobile}/>
      </div>
      <div>
        <label htmlFor="contact">Contato </label>
        <FormInput onChange={(e) => setForm({ ...form, contact: e.target.value })} value={form.contact}/>
      </div>
      <div>
        <label htmlFor="email">E-mail </label>
        <FormInput onChange={(e) => setForm({ ...form, email: e.target.value })} value={form.email} />
      </div>
      <div>
        <label htmlFor="id">Identidade * </label>
        <FormInput onChange={(e) => setForm({ ...form, id: e.target.value })} value={form.id} />
      </div>     
      <div>
        <label htmlFor="cpf">CPF * </label>
        <FormInput onChange={(e) => setForm({ ...form, cpf: e.target.value })} value={form.cpf} />
      </div>
      {/* <ErrorSpan isError={cpfError}>O CPF informado já está cadastrado!</ErrorSpan> */}
      <div>
        <label htmlFor="vehicle">Possui Veículo </label>
        <FormInput onChange={(e) => setForm({ ...form, vehicle: e.target.value })} value={form.vehicle} />
      </div>
      <div>
        <label htmlFor="license">Habilitação </label>
        <FormInput onChange={(e) => setForm({ ...form, license: e.target.value })} value={form.license} />
      </div>
      <button onClick={() => createCandidate()}>Enviar!!</button>
    </div>        
  );
}

export default App;

const FormInput = styled.input`
  border: 1px solid red;  
` 
// const ErrorSpan = styled.span`
//   color: red;
//   display: ${(props) => props.isError ? 'block' : 'none'};
// `
