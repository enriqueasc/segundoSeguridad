import LoginLogout from "../src/components/InicioCerrarSesion";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export const getServerSideProps = withPageAuthRequired();

export default function Profile({ user }) {
    console.log(user);
    return (
        <div>
            <h1>Materias</h1>
            <p>Nombre: Seguridad en el desarrollo de aplicaciones aplicaciones</p>
            <p>Ing: Ana Sol Arteaga Rivera </p>
           
            <LoginLogout />
        </div>
    );
} 