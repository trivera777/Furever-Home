import { createContext, useState, useContext, useEffect } from "react";
import token from './token'
const petFinderKey = 'x5HLqYqM8HDHJ5m2id99hhR1oDJkk8osNlLESGenCvBuiZSQVP'    //process.env.PETFINDER_KEY;
const petFinderSecret = 'q3IabuCTq4c1KAjC3jViKNluLYxQNYSP7FCfVJCs' //process.env.PETFINDER_SECRET;


export const PetAuthContext = createContext();
export const PetAuthProvider = ({children }) => {
  
  const [accessToken, setAccessToken] = useState(null);
  
  useEffect(() => {
    console.log("Inside PethAuthContext")
  
  
  const fetchAccessToken = async () => {
    
    //const res = await fetch(token);
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    params.append("client_id", petFinderKey);
    params.append("client_secret", petFinderSecret);
    
    const petfinderRes = await fetch(
    "https://api.petfinder.com/v2/oauth2/token",
    {
      method: "POST",
      body: params,
    }
  );
    const data = await petfinderRes.json();
    // const json = await res.json();
    console.log(data);
    setAccessToken(data.access_token);
    console.log(data.access_token)
  };
  
  fetchAccessToken();
  }, []);

  
  return (
    <PetAuthContext.Provider value = {{accessToken}}>
      {children}
    </PetAuthContext.Provider>
  )
};

export const usePetAuth = () => useContext(PetAuthContext)