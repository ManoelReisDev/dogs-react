import Head from "../Helpers/Head";
import Loading from "../Helpers/Loading";
import Error from "../Errors/Error";
import useFetch from "../../Hooks/useFetch";
import { userGetStats } from "../../api";
import { lazy, useEffect, Suspense } from "react";
const UserStatsGraph = lazy(() => import("./UserStatsGraph"));

const UserStats = () => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = userGetStats();
      await request(url, options);
    }

    getData();
  }, [request]);


  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
  return (
    <Suspense fallback={<div></div>}>
      <Head
        title="Estatísticas"
        description="Página de estatísticas do site Dogs. Veja suas estatísticas de fotos, curtidas e comentários."
      />
      <UserStatsGraph data={data} />
    </Suspense>
  );
  else return null;
};

export default UserStats;
