import ReviewCard from "../Components/ReviewCard";
import { reviews } from "../Constants/map";

const CustomerReviews = () => {
  return (
    <section className="max-container ">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our? <span className="text-coral-red">Customers </span>
        Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Haer geaniune Stories from our satisfied customers about their experices with us.</p>

      <div className="m-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">

        {
          reviews.map(reviews => <ReviewCard
          key={reviews.name}
          {...reviews}
          
          ></ReviewCard>)
        }

      </div>
    </section>
  );
};

export default CustomerReviews;
