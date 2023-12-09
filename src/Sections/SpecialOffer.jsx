import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
          alt=""
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h1
          className=" font-palanquin text-4xl capitalize lg:max-w-lg 
      
      font-bold"
        >
          
          <span className="text-coral-red">Special </span>
          
          Offer
        </h1>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footware
          is designed to elevate your experience, providing you with unmatched
          quality innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possible designed to fullfill your unique cleasies, surprising the lofiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button iconURL={arrowRight} label={"View Details"}></Button>
          <Button   label={"Learn More"}></Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
