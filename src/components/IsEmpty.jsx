const IsEmpty = ({ children }) => {
  return (
    <article className="empty-element-wrapper size-full flex items-center justify-center">
      <div className="empty-element w-fit px-10 py-4 relative text-center bg-card text-primary-text rounded-full shadow-sm">
        {children}
      </div>
    </article>
  );
};

export default IsEmpty;
