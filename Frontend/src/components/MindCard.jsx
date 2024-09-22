import { IMG_URL } from "../utils/constants"
const Mind = ({ data }) => {
    return <div className="flex-none w-1/4 md:w-1/6 lg:w-1/5">
        {/* {console.log(data)} */}
        <img className="h-[200px] w-[170px]" src={IMG_URL + data.imageId}></img>
    </div>
}
export default Mind;