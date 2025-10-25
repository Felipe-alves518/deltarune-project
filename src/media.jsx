const Media = (props) => {
const {image} = props;
return(
<div className="border-2 w-fit mt-[10px] rounded-md m-2">
    <img src={image} className="h-[30px] p-1"/>

</div>
);
}

export default Media;