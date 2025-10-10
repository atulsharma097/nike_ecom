
import ReviewCard from "../Components/ReviewCard";
import { review } from "../Constants";

const CustomerReviews = () => {
  return (
    <section className=' max-container hover:cursor-default'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What Our
        <span className='text-coral-red'> Customers </span>
        Say?
      </h3>
      <p className='m-auto mt-1 max-w-lg  text-center info-text'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className='mt-20 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 '>
        {review.map((review, ) => (
          <ReviewCard
            key={review.CustomerName}
            imgURL={review.imgURL}
            customerName={review.CustomerName}
            rating={review.ratiing}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;