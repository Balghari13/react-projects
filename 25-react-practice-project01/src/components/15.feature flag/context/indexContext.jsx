import { createContext,useState, useEffect } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null)

export default function FeatureFlagsGlobalContext({children}){
  const[loading, setLoading]= useState(false)
  const [enableFlags, setEnableFlags] = useState({})
  
  const fetchFeatureFlags = async()=>{
    
    try{
      setLoading(true)
      const response = await featureFlagsDataServiceCall()
      console.log(response);
      setEnableFlags(response)
      setLoading(false)
    }catch(error){
      console.log(error);
      setLoading(false)
      throw new Error(error)
      
    }
  }

  useEffect(()=>{
    fetchFeatureFlags()
  },[])
  return(
    <FeatureFlagsContext.Provider value={{enableFlags,loading}}>{children}</FeatureFlagsContext.Provider>
  )
}
