import type { ReactNode } from "react";

type CardProps = {
  title: string;
  description: string;
  image?: string;
  children?: ReactNode;
};

function Card({ title, description, image, children }: CardProps) {
  return (
    <article className="card">
      {image && <img className="card__image" src={image} alt={title} />}
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </article>
  );
}

export default Card;
