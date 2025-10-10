const Button = ({
  label,
  iconURL,
  backgroundColor = 'bg-transparent', // Default to transparent
  sbackgroundcolor= 'bg-coral-red',
  textColor = 'text-white', // Default text color
  borderColor = 'border-coral-red', // Default to transparent border
  hoverborderColor = 'hover:border-coral-red', // Default to transparent border
  fullWidth,
  hoverColor = 'hover:bg-coral-red', // Default hover effect
  hoverTextColor ='hover:bg-white',
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${backgroundColor} ${textColor} ${borderColor} ${hoverColor} ${hoverTextColor}${hoverborderColor}${sbackgroundcolor}
      rounded-full ${fullWidth && 'w-full'} transition-colors duration-300 ease-in-out`}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt='icon'
          className='ml-2 rounded-full bg-white w-5 h-5'
        />
      )}
    </button>
  );
};

export default Button;
