import dog from "../../assets/dog.svg";
import { Link } from "react-router-dom";
import { Button, ButtonVariant } from "../../components/common/Button";
import styles from "./Home.module.css";

export function Home() {
  return (
    <div className={styles.container}>
      <img src={dog} />
      <Link to="/Pets">
        <Button variant={ButtonVariant.Default}>Quero adotar</Button>
      </Link>
      <Link to="/Admin">
        <Button variant={ButtonVariant.Outlined}>Tenho um abrigo</Button>
      </Link>
    </div>
  );
}
