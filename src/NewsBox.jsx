const News = (props) => {
const {date, title, image} = props;
return (
<div className="border-white border-2 rounded-md flex p-4 items-center bg-[#1a1a1a] w-[400px] my-[10px]">
    <div>
    <img src={image} className="h-[90px]"/>
    </div>
    <div className="flex flex-col font-pixelify ml-[10px]">
    <p className="text-[#F9FF10]">{date}</p>
    <p className="text-white">{title}</p>
    </div>


</div>
);
}

export default News;