import apiClient from "./api-client";
interface Entity{
    id : number
}
class HttpService{
     endpoint : string;
    constructor(endpoint:string){
        this.endpoint = endpoint
    }
    getAll<T>(){
        const controller = new AbortController();
        const request = apiClient
          .get<T[]>(this.endpoint, {
            signal: controller.signal,
          })
          return {request, cancel:()=>controller.abort()}
     }
     delete(id : number){
        return   apiClient.delete(this.endpoint+"/" + id);
     }
     addUser<T>(entity:T){
     return apiClient.post(this.endpoint,entity)
     }
     updateUser<T extends Entity>(user:T){
      return apiClient.patch(this.endpoint+ "/" + user.id, user)
     }
}

const create = (endpoint : string)=> new HttpService(endpoint)

export default create