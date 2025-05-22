import * as Icons from 'react-icons/fa'; // Font Awesome from react-icons
import { infoCardsData } from '../assets/InfoData';

const InfoSection = () => {
  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
        {infoCardsData.map((card, index) => {
          const IconComponent = Icons[card.icon];
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transform transition duration-300 hover:-translate-y-1"
            >
              <div className="text-red-500 text-5xl mb-4">
                {IconComponent && <IconComponent />}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default InfoSection;
