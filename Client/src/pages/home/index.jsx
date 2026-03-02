import {
  Container,
  Inputscontainer,
  Input,
  Title,
  Inputlabel,
  Form,
} from "./styles.js";

import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import api from "../../services/api";
import DefaultButton from "../../components/button/index.jsx";
import TopBackground from "../../components/TopBackground/index.jsx";



function Home() {
  const InputName = useRef()
  const InputAge = useRef()
  const InputEmail = useRef()
  const navigate = useNavigate() 


  async function registerUser() {
    const data = await api.post("/usuario", {
      name: InputName.current.value,
      age: parseInt(InputAge.current.value),
      email: InputEmail.current.value
    })

    console.log(data)
  }

  return (
    <Container>

      <TopBackground/>
        

      <Form action="">
        <Title>Cadastrar Usuário</Title>


        <Inputscontainer>
          <div>
            <Inputlabel>Nome <span> *</span></Inputlabel>
            <Input type="text" placeholder="Nome do Usuário" ref={InputName} />
          </div>

          <div>
            <Inputlabel>Idade <span> *</span></Inputlabel>
            <Input type="number" placeholder="Idade" ref={InputAge} />
          </div>
        </Inputscontainer>
        <div style={{ width: "100%" }}>
          <Inputlabel>Email <span> *</span></Inputlabel>
          <Input type="email" placeholder="Email" ref={InputEmail} />
        </div>

        <DefaultButton type="button" onClick={registerUser} theme = "primary">Cadastrar</DefaultButton>
      </Form>
      <DefaultButton type="button" onClick={() => navigate("/list-users")}>Lista de Usuarios</DefaultButton>
    </Container>
  );
}

export default Home;

