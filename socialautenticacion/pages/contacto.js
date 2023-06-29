import LoginLogout from "../src/components/LoginLogout";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export const getServerSideProps = withPageAuthRequired();

export default function Profile({ user }) {
    console.log(user);
    return (
        <div>
            <h1>Ve mis datos de contacto</h1>
            <p>Matricula: {user && user.nickname}</p>
            <p>Telefono: 4423630331</p>
            
            <LoginLogout />
        </div>
    );
}