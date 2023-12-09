
import { star } from '../assets/icons';

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
    return (
        <div>
            <img className='rounded-full mx-auto object-cover h-[100px] w-[100px]'  src={imgURL} alt="" />
            <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
            <div className='mt-3 flex justify-center items-center gap-2.5 '>
                <img width={24} height={24}  className='object-contain m-0' src={star} alt="" />
                <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
            </div>
            <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>{customerName}</h3>
        </div>
        
    );
};

export default ReviewCard;