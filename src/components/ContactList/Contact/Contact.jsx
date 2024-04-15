import css from './Contact.module.css';

export default function Contact({ data: { name, number } }) {
  return (
    <div className={css.cardWrapper}>
      <p>{name}</p>
      <p>{number}</p>
    </div>
  );
}
