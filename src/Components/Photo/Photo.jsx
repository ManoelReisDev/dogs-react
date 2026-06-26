import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { useEffect } from "react";
import { getPhoto } from "../../api";
import Error from "../Errors/Error";
import Loading from "../Helpers/Loading";
import PhotoContent from "./PhotoContent";
import Head from "../Helpers/Head";

const Photo = () => {
  const { id } = useParams();
  console.log(id);
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhoto() {
      const { url, options } = getPhoto(id);
      await request(url, options);
    }
    fetchPhoto();
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head
          title={data.photo.title}
          description={`Foto de ${data.photo.author}`}
        />
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};

export default Photo;
