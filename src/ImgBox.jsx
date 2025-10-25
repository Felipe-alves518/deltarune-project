const ImgBox = (props) => {
const {img, heigth} = props;
return(
<div className={` `}>
    <img src={img} className={`h-140px] w-[256pxpx] border-2 border-[#FFFFFF]`} />
</div>
);
}

export default ImgBox