import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className='category'>
      <div
        className='category__bg-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='category__body'>
        <h2>{title}</h2>
        <p>Show Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
