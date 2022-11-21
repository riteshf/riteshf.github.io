type CardProps = {
  children: any;
};
const Card = ({ children }: CardProps) => {
  return (
    <div className="card shadow-lg compact bg-base-100">
      {children}
    </div>
  );
};

export default Card;
