import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import { CanceledError } from "../services/api-client";

const useUsers = () => {
    const [isLoading, setLoading] = useState(false);
    const [users, setUser] = useState<User[]>([]);
    const [errors, setError] = useState();
    useEffect(() => {
      setLoading(true);
      const { request, cancel } = userService.getAll<User>();
      request
        .then((res) => {
          setUser(res.data);
          setLoading(false);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
          setLoading(false);
        });
      return () => {
        cancel();
      };
    }, []);
 return {users,errors,isLoading,setUser,setError,setLoading}
}

export default useUsers