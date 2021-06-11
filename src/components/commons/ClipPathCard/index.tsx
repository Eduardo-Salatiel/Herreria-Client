import "./style.scss";

interface Props {
  imageUrl: string;
  title: string;
  content: string;
}

const ClipPathCard = ({ imageUrl, content, title }: Props) => {
  return (
    <div className="clip-path-card">
      <div className="clip-path-card-image">
        <img src={imageUrl} alt="herreria-artesanal-forja" />
      </div>
      <div className="clip-path-card-content">
        <h2 className="title">{title}</h2>
        <p className="text-content">{content}</p>
      </div>
    </div>
  );
};

export default ClipPathCard;
