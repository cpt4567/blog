import HeaderLayout from '../components/layout/Header/HeaderLayout';
import Seo from '../components/layout/Header/Title';
import MainLayout from '../components/layout/Main/MainLayout';
import useApi from '../hooks/useApi';

export default function Home() {
  const data = useApi(`/api/movies`);
  const img = `https://image.tmdb.org/t/p/w500/`;

  return (
    <>
      <Seo disabled={true} title="main" />
    </>
  );
}
