import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import { useEffect } from 'react';
import { getPhotos } from '../../api';
import Error from '../Errors/Error';
import Loading from '../Helpers/Loading';
import styles from './FeedPhotos.module.css';

const FeedPhotos = ({setModalPhoto}) => {

  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = getPhotos({ page: 1, total: 6, user: 0 });
      await request(url, options);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <ul className={`animeLeft ${styles.feed}`}>
          {data.map(photo => <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto}/>)}
      </ul>
  );
  else return null;
}

export default FeedPhotos;
