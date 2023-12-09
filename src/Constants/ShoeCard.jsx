

const ShoeCard = ({imgURL,chnageBigShowImage, bigShowImg}) => {
    const handleCLick = () => {
        if(bigShowImg !== imgURL.bigShoe)
        {
            chnageBigShowImage(imgURL.bigShoe)
        }
    }
    return (
        <div className={`border-2 rounded-xl 
        ${bigShowImg === imgURL.bigShoe? 'border-coral-red  ' : 'border-transparent'}
         cursor-pointer max-sm:flex-1

        `}
        onClick={handleCLick}
        >
            <div className='flex justify-center items-center  bg-current bg-cover bg-card sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
                <img className='object-contain' src={imgURL.thumbnail} width={127} height={103} alt="" />
            </div>
        </div>
    );
};

export default ShoeCard;