function Card({ children }) {
  return (
    <article className="p-2 space-y-1.5 bg-card rounded-3xl shadow-sm outline-2.5 outline-card outline-solid outline-offset-2 transition-[outline] duration-400 hover:outline-secondary">
      {children}
    </article>
  );
}

export default Card;
