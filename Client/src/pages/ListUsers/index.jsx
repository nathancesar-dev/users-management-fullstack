import { Title, ContainerUsers, CardUsers, Trashimg } from "./styles.js";

import { useEffect } from "react";
import DefaultButton from "../../components/button";
import TopBackground from "../../components/TopBackground/index.jsx";
import api from "../../services/api.js";
import { useState } from "react";
import TrashIcon from "../../assets/trash.svg";
import { Container } from "../home/styles.js";
import { useNavigate } from "react-router-dom";


function ListUsers() {
    const navigate = useNavigate()

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const { data } = await api.get("/usuario");
            setUsers(data);
        }
        fetchUsers();
    }, []);

     async function deleteUser(id) {
        await api.delete(`/usuario/${id}`)
        setUsers(users.filter(user => user.id !== id));
    }

    return (
        <Container>



            <TopBackground></TopBackground>
            <Title>Lista de Usuários</Title>
            <ContainerUsers>
                {users.map(user => (
                    <CardUsers>
                        AvatarUser
                        <div key={user.id}>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <Trashimg src={TrashIcon} alt="Ícone de lixeira" onClick={() => deleteUser(user.id)}/>
                    </CardUsers>
                ))}

            </ContainerUsers>
            <DefaultButton type="button" theme={"secondary"} onClick={() => navigate("/")}>Voltar</DefaultButton>

        </Container>
    )
}

export default ListUsers;