import { Card } from "../../components/common/Card";
import { Header } from "../../components/common/Header";
import { Grid } from "../../components/layout/Grid";
import styles from "./Pets.module.css";
import { Skeleton } from "../../components/common/Skeleton";
import { Pagination } from "../../components/common/Pagination";
import { useSearchParams } from "react-router-dom";

export function Pets() {
  const [searcParams, setSearchParams] = useSearchParams();

  const urlParams = {
    page: searcParams.get('page') ? Number(searcParams.get('page')) : 1,
  }


  function changePage(page: number){
    setSearchParams((params)=>{
      params.set('page', String(page))
      return params
    })
  }

  return (
    <Grid>
      <div className={styles.container}>
        <Header />
        {isLoading && (
          <Skeleton containerClassName={styles.skeleton} count={10} />
        )}
        <main className={styles.list}>
          {/* <Skeleton count={5} containerClassName={styles.skeleton} /> */}
          {data?.items?.map((pet) => (
            <Card
              key={pet.id}
              href={`/pet/${pet.id}`}
              text={pet.name}
              thumb={pet.photo}
            ></Card>
          ))}
        </main>
        {data?.currentPage && (
          <Pagination
            currentPage={data.currentPage}
            totalPages={data.totalPages}
            onPageChange={(number) => changePage(number)}
          />
        )}
      </div>
    </Grid>
  );
}
