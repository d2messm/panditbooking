import { Link } from 'react-router-dom';
import { categories } from '../data/services';

const CategorySlider = () => {
  return (
    <div className="flex overflow-x-auto gap-4 scrollbar-hide pb-5">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/category/${category.id}`}
          className="flex items-center justify-center relative cursor-pointer"
        >
          <div className="w-[104px] h-[136px] md:w-[124px] md:h-[156px] lg:w-[260px] lg:h-[260px] overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out relative">
            <img
              src={category.image}
              alt={category.name}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-5 bg-opacity-50 text-white w-full text-center justify-center p-2">
              <span className="flex flex-col items-center justify-center text-sm xl:text-2xl">
                {category.name}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategorySlider; 