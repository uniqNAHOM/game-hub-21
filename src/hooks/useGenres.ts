
import useData from "./useData";

export interface Genre{
id : number,
name: string;  // genre name
}

const useGenres = () => useData<Genre>("/genres")

export default useGenres