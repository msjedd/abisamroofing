const WaterServiceCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4 bg-white shadow-lg rounded-lg">
    <Icon className="text-primary text-4xl mb-2" />
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default WaterServiceCard;
