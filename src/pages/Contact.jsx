import ContactForm from "../components/ContactForm";
import AddressBook from "../components/AddressBook";
import Title from "../components/Title";
import roofHero2 from "../assets/roof_hero2.jpg";

const Contact = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center p-8 bg-cover bg-center "
      style={{ backgroundImage: `url(${roofHero2})` }}
    >
      <div className="bg-primary/180 backdrop-blur-xs p-6 rounded-lg shadow-lg mb-8">
        <Title
          level="h2"
          subtitle="Have questions about our roofing services, materials, or pricing?  
        We’re here to help! Reach out to us for expert advice, quotes, or any inquiries.  
        Our team is ready to assist you in making the best roofing choices for your project."
          theme="light"
        >
          Get in Touch
        </Title>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        <div className="min-h-[400px]">
          <ContactForm />
        </div>

        <div className="min-h-[400px]">
          <AddressBook />
        </div>
      </div>
    </div>
  );
};

export default Contact;
