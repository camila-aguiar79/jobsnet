import React, {useState, useEffect} from 'react'
import axios from 'axios'
import * as S from './style'
import './assets/img/contact_page.svg'


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


  useEffect(() => {
    console.log(form);
  }, [form])


  return (
    <S.Main>
      
      <S.Form>
        <fieldset>
          <S.Title>Dados Pessoais</S.Title>
          <S.Field>
            <label htmlFor="name">Nome Completo * </label><br />
            <S.FormInput onChange={(e) => setForm({ ...form, name: e.target.value })} value={form.name} required/>
          </S.Field>
          <S.Field>
            <label htmlFor="position">Cargo Pretendido </label><br />
            <S.FormInput onChange={(e) => setForm({ ...form, position: e.target.value })} value={form.position}/>
          </S.Field>
          <S.Field>
            <label htmlFor="birthdate">Data de Nascimento * </label><br />
            <S.FormInput type="date" onChange={(e) => setForm({ ...form, birthdate: e.target.value })} value={form.birthdate} required/>
          </S.Field>
          <S.Field>
            <label htmlFor="maritalstatus">Estado Civil </label> <br />
            <S.Select onChange={(e) => setForm({ ...form, maritalstatus: e.target.value })} value={form.maritalstatus}>
              <option value=""></option>
              <option value="">Solteira(o)</option>
              <option value="">Casada(o)</option>
              <option value="">Separada(o)</option>
              <option value="">Divorciada(o)</option>
              <option value="">Viúva(o)</option>
            </S.Select>
          </S.Field>
          <S.Field>
            <label htmlFor="gender">Gênero </label><br />
            <S.Select onChange={(e) => setForm({ ...form, gender: e.target.value })} value={form.gender}>
              <option value=""></option>
              <option value="">Cis-Feminino</option>
              <option value="">Cis-Masculino</option>
              <option value="">Trans-Feminino</option>
              <option value="">Trans-Masculino</option>
              <option value="">Não-Binário</option>
            </S.Select>
          </S.Field>
          <S.Field>
            <label htmlFor="address">Endereço * </label><br />
            <S.FormInput onChange={(e) => setForm({ ...form, address: e.target.value })} value={form.address} />
          </S.Field>
          <S.Field>
            <label htmlFor="district">Bairro * </label><br />
            <S.FormInput onChange={(e) => setForm({ ...form, district: e.target.value })} value={form.district} />
          </S.Field>
          <S.Field>
            <label htmlFor="localidade">Cidade * </label><br />
            <S.FormInput onChange={(e) => setForm({ ...form, localidade: e.target.value })} value={form.localidade} />
          </S.Field>
          <S.Field>
            <label htmlFor="cep">Cep </label><br />
            <S.FormInput  onBlur={() => {fetchAddress()}} onChange={(e) => setForm({ ...form, cep: e.target.value })} value={form.cep}/>
          </S.Field>
          <S.Field>
            <label htmlFor="phone1">Telefone Fixo 1 </label><br />
            <S.FormInput onChange={(e) => setForm({ ...form, phone1: e.target.value })} value={form.phone1}/>
          </S.Field>
          <S.Field>
            <label htmlFor="phone2">Telefone Fixo 2 </label><br />
            <S.FormInput onChange={(e) => setForm({ ...form, phone2: e.target.value })} value={form.phone2}/>
          </S.Field>
          <S.Field>
            <label htmlFor="mobile">Celular </label><br />
            <S.FormInput onChange={(e) => setForm({ ...form, mobile: e.target.value })} value={form.mobile}/>
          </S.Field>
          <S.Field>
            <label htmlFor="contact">Contato </label><br />
            <S.FormInput onChange={(e) => setForm({ ...form, contact: e.target.value })} value={form.contact}/>
          </S.Field>
          <S.Field>
            <label htmlFor="email">E-mail </label><br />
            <S.FormInput type="email" onChange={(e) => setForm({ ...form, email: e.target.value })} value={form.email} />
          </S.Field>
        </fieldset>
      </S.Form>
      <S.Form>      
          <fieldset>
          <S.Title>Documentos</S.Title>
            <S.Field>
              <label htmlFor="id">Identidade * </label><br />
              <S.FormInput onChange={(e) => setForm({ ...form, id: e.target.value })} value={form.id} />
            </S.Field>     
            <S.Field>
              <label htmlFor="cpf">CPF * </label><br />
              <S.FormInput onChange={(e) => setForm({ ...form, cpf: e.target.value })} value={form.cpf} />
            </S.Field>
            <S.Field>
              <label htmlFor="vehicle">Possui Veículo </label><br />
              <S.Select onChange={(e) => setForm({ ...form, vehicle: e.target.value })} value={form.vehicle}>
                <option value=""></option>
                <option value="">Sim</option>
                <option value="">Não</option>
              </S.Select>
            </S.Field>
            <S.Field>
              <label htmlFor="license">Habilitação </label><br />
              <S.Select onChange={(e) => setForm({ ...form, license: e.target.value })} value={form.license}>
                <option value=""></option>
                <option value="">Sim</option>
                <option value="">Não</option>
              </S.Select>  
            </S.Field>
          </fieldset>
          <S.Button onClick={() => createCandidate()}>Enviar!!</S.Button>
      </S.Form>      
    </S.Main>        
  );
}

export default App;


