import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss'

const Directory = ({ categories }) => {
  return (
    <div className='directories'>
      {categories.map(category => (
        <CategoryItem key={categories.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
