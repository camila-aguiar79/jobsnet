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
        <S.Fieldset>
          <S.Title>Dados Pessoais</S.Title>
          <S.Field>
            <S.Label htmlFor="name">Nome Completo * </S.Label><br />
            <S.FormInput onChange={(e) => setForm({ ...form, name: e.target.value })} value={form.name} required/>
          </S.Field>
          <S.Field>
            <S.Label htmlFor="position">Cargo Pretendido </S.Label><br />
            <S.FormInput onChange={(e) => setForm({ ...form, position: e.target.value })} value={form.position}/>
          </S.Field>
          <S.Field>
            <S.Label htmlFor="birthdate">Data de Nascimento * </S.Label><br />
            <S.FormInput type="date" onChange={(e) => setForm({ ...form, birthdate: e.target.value })} value={form.birthdate} required/>
          </S.Field>
          <S.Field>
            <S.Label htmlFor="maritalstatus">Estado Civil </S.Label> <br />
            <S.Select onChange={(e) => setForm({ ...form, maritalstatus: e.target.value })} value={form.maritalstatus}>
              <option onChange={(e) => setForm({ ...form, maritalstatus: e.target.value })} value=""></option>
              <option onChange={(e) => setForm({ ...form, maritalstatus: e.target.value })} value="solteira(o)">Solteira(o)</option>
              <option onChange={(e) => setForm({ ...form, maritalstatus: e.target.value })} value="casada(o)">Casada(o)</option>
              <option onChange={(e) => setForm({ ...form, maritalstatus: e.target.value })} value="separada(o)">Separada(o)</option>
              <option onChange={(e) => setForm({ ...form, maritalstatus: e.target.value })} value="divorciada(o)">Divorciada(o)</option>
              <option onChange={(e) => setForm({ ...form, maritalstatus: e.target.value })} value="viuva(o)">Viúva(o)</option>
            </S.Select>
          </S.Field>
          <S.Field>
            <S.Label htmlFor="gender">Gênero </S.Label><br />
            <S.Select onChange={(e) => setForm({ ...form, gender: e.target.value })} value={form.gender}>
              <option onChange={(e) => setForm({ ...form, gender: e.target.value })} value=""></option>
              <option onChange={(e) => setForm({ ...form, gender: e.target.value })} value="feminino-cis">Feminino Cis</option>
              <option onChange={(e) => setForm({ ...form, gender: e.target.value })} value="masculino-cis">Masculino Cis</option>
              <option onChange={(e) => setForm({ ...form, gender: e.target.value })} value="feminino-trans">Feminino Trans</option>
              <option onChange={(e) => setForm({ ...form, gender: e.target.value })} value="masculino-trans">Masculino Trans</option>
              <option onChange={(e) => setForm({ ...form, gender: e.target.value })} value="nao-binario">Não-Binário</option>
            </S.Select>
          </S.Field>
          <S.Field>
            <S.Label htmlFor="address">Endereço * </S.Label><br />
            <S.FormInput placeholder="ex: Nome da Rua, 10 / Apt 301" onChange={(e) => setForm({ ...form, address: e.target.value })} value={form.address} />
          </S.Field>
          <S.Field>
            <S.Label htmlFor="district">Bairro * </S.Label><br />
            <S.FormInput onChange={(e) => setForm({ ...form, district: e.target.value })} value={form.district} />
          </S.Field>
          <S.Field>
            <S.Label htmlFor="localidade">Cidade * </S.Label><br />
            <S.FormInput onChange={(e) => setForm({ ...form, localidade: e.target.value })} value={form.localidade} />
          </S.Field>
          <S.Field>
            <S.Label htmlFor="cep">Cep </S.Label><br />
            <S.FormInput  onBlur={() => {fetchAddress()}} onChange={(e) => setForm({ ...form, cep: e.target.value })} value={form.cep}/>
          </S.Field>
          <S.Field>
            <S.Label htmlFor="phone1">Telefone Fixo 1 </S.Label><br />
            <S.FormInput onChange={(e) => setForm({ ...form, phone1: e.target.value })} value={form.phone1}/>
          </S.Field>
          <S.Field>
            <S.Label htmlFor="phone2">Telefone Fixo 2 </S.Label><br />
            <S.FormInput onChange={(e) => setForm({ ...form, phone2: e.target.value })} value={form.phone2}/>
          </S.Field>
          <S.Field>
            <S.Label htmlFor="mobile">Celular </S.Label><br />
            <S.FormInput onChange={(e) => setForm({ ...form, mobile: e.target.value })} value={form.mobile}/>
          </S.Field>
          <S.Field>
            <S.Label htmlFor="contact">Contato </S.Label><br />
            <S.FormInput onChange={(e) => setForm({ ...form, contact: e.target.value })} value={form.contact}/>
          </S.Field>
          <S.Field>
            <S.Label htmlFor="email">E-mail </S.Label><br />
            <S.FormInput type="email" placeholder="ex: nome@email.com" onChange={(e) => setForm({ ...form, email: e.target.value })} value={form.email} />
          </S.Field>
        </S.Fieldset>
      </S.Form>
      <S.Form>      
          <S.Fieldset>
          <S.Title>Documentos</S.Title>
            <S.Field>
              <S.Label htmlFor="id">Identidade * </S.Label><br />
              <S.FormInput onChange={(e) => setForm({ ...form, id: e.target.value })} value={form.id} />
            </S.Field>     
            <S.Field>
              <S.Label htmlFor="cpf">CPF * </S.Label><br />
              <S.FormInput onChange={(e) => setForm({ ...form, cpf: e.target.value })} value={form.cpf} />
            </S.Field>
            <S.Field>
              <S.Label htmlFor="vehicle">Possui Veículo </S.Label><br />
              <S.Select onChange={(e) => setForm({ ...form, vehicle: e.target.value })} value={form.vehicle}>
                <option onChange={(e) => setForm({ ...form, vehicle: e.target.value })} value=""></option>
                <option onChange={(e) => setForm({ ...form, vehicle: e.target.value })} value="sim">Sim</option>
                <option onChange={(e) => setForm({ ...form, vehicle: e.target.value })} value="nao">Não</option>
              </S.Select>
            </S.Field>
            <S.Field>
              <S.Label htmlFor="license">Habilitação </S.Label><br />
              <S.Select onChange={(e) => setForm({ ...form, license: e.target.value })} value={form.license}>
                <option onChange={(e) => setForm({ ...form, license: e.target.value })} value=""></option>
                <option onChange={(e) => setForm({ ...form, license: e.target.value })} value="sim">Sim</option>
                <option onChange={(e) => setForm({ ...form, license: e.target.value })} value="nao">Não</option>
              </S.Select>  
            </S.Field>
          </S.Fieldset>
          <S.Button onClick={() => createCandidate()}>Enviar!!</S.Button>
      </S.Form>      
    </S.Main>        
  );
}

export default App;


