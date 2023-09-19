import useData from "./useData";

interface PLatform {
    id : number,
    name : string,
    slug : string;
}

const  usePlatforms = () => useData<PLatform>("/platforms/lists/parents") 

export default usePlatforms