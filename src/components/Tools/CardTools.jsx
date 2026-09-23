import Edit from "./elements/Edit";
import Remove from "./elements/Remove";

function CardTools({ item, fields, onUpdate, onRemove, label, nameKey }) {
  return (
    <section className="card-tools flex items-center bg-basebackground rounded-full overflow-hidden [&_button]:w-full [&_button]:h-8 [&_button]:flex [&_button]:items-center [&_button]:justify-center [&_button]:gap-x-1 [&_button]:rounded-full [&_button]:cursor-pointer [&_button]:text-primary-text [&_button]:transition-colors [&_button]:duration-300 [&_button]:hover:bg-secondary [&_button]:hover:text-primary [&_svg]:size-4.5">
      <Edit item={item} fields={fields} onUpdate={onUpdate} label={label} />
      <Remove item={item} onRemove={onRemove} label={label} nameKey={nameKey} />
    </section>
  );
}

export default CardTools;
