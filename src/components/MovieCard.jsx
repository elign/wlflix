import imageNotFound from "../assets/image-not-found.webp"
export default function MovieCard(props) {
  const { title, image, year } = props;
  return (
    <div className="movie-card">
      <img src={image !=="N/A" ? image : imageNotFound} alt={title} />
      <h2>{title}</h2>
      <p>{year}</p>
    </div>
  );
}
