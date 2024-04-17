import { Link } from "react-router-dom";
import { Header } from "../../components/common/Header";
import { Grid } from "../../components/layout/Grid";

export function Pets(){
    return (
        <Grid>
        <Header />
        <Link to ="/pets/2223222">Ir Para Listagem</Link>
        </Grid>
    )
}