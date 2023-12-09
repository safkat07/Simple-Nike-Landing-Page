

const Button = ({label, iconURL, fullWidth}) => {
    return (
        <button className={`flex  items-center justify-center  gap-2 px-7 rounded-full border-coral-red text-white py-4 text-lg leading-none bg-coral-red border font-montserrat ${fullWidth && "w-full"}`} >
            {label}
            {
                iconURL && <img src={iconURL} alt=""  className="ml-2 w-5 h-5 rounded-full" />
            }
        </button>
    );
};

export default Button;