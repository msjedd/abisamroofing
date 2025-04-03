import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const AddressBook = () => {
  return (
    <div className="w-full h-full p-6 border border-white/30 backdrop-blur-lg bg-primary/10 shadow-lg rounded-lg flex flex-col justify-center items-start text-dark text-start">
      {/* <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2> */}

      <div className="flex justify-center gap-3 mb-6">
        <FaMapMarkerAlt className="text-primary text-2xl" />
        <p className="text-center">
          50, Oke Aro Street, Abule Egba, Lagos State, Nigeria
        </p>
      </div>
      <div className="flex items-center gap-3 mb-6">
        <FaWhatsapp className="text-green-500 text-2xl" />
        <p>+2348145786032</p>
      </div>
      <div className="flex items-center gap-3 mb-6">
        <FaEnvelope className="text-secondary text-2xl" size={20} />
        <p className="text-center">abisamroofingsystem@gmail.com</p>
      </div>
      <div className="flex items-center gap-3 mb-6">
        <FaInstagram className="text-pink-800 text-2xl" />
        <p>@abisam_roofing_official</p>
      </div>
    </div>
  );
};

export default AddressBook;
