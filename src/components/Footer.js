export default function Footer({ items }) {
  const numItems = items.length;
  if (numItems === 0) {
    return <p className="stats">Start adding some items to your list.</p>;
  }

  const numPackedItems = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! You are ready to go."
          : `You have ${numItems} items on your list, and you have already packed ${numPackedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
