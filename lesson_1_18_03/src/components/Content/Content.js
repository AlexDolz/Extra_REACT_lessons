import s from './Content.module.css';

const Content = ({ obj }) => {
  const { image, title, direction, background, textColor, text } = obj;
  return (
    <div
      className={s.section}
      style={{
        flexDirection: direction,
        backgroundColor: background,
        color: textColor,
      }}
    >
      <div className={s.inner}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <img src={image} alt='#' />
    </div>
  );
};

export default Content;
