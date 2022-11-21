import Title from '../components/layout/Header/Title';
import useApi from '../hooks/useApi';

export default function Home() {
  const data = useApi(`/api/movies`);
  const img = `https://image.tmdb.org/t/p/w500/`;

  return (
    <div className="container">
      <Title title="캠핑은 여행이다." />
      {!data[19] && <div>Loading...</div>}
      {data?.map((data: any) => (
        <div className="movie" key={data.id}>
          <img src={`${img}${data.poster_path}`} alt="img photo"></img>
          <h4>{data.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {u
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
