const Box = (props) => {
    const {image, bgcolor,invert, w , h} = props;
    const colorVariants ={
        blue: "bg-[#155DFC]",
        gray:"bg-[#101828]",
        red:"bg-red-600",
        white:"bg-[#FFFFFF]"
    };
    {/*W-125px h-[80px] */}

    return(
        <div className={`${colorVariants[bgcolor]} flex border-2 border-[#FFFFFF] w-[125px] h-[80px] m-[10px] rounded-xl`} >
           <img src={image} className={` h-[80px] mx-auto p-[10px]  ${invert ? "invert": ""} `}/>
        </div>


    )
}

export default Box;