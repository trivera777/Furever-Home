// import { petFinderKey, petFinderSecret } from "../../api-keys";
const petFinderKey = 'x5HLqYqM8HDHJ5m2id99hhR1oDJkk8osNlLESGenCvBuiZSQVP'    //process.env.PETFINDER_KEY;
const petFinderSecret = 'q3IabuCTq4c1KAjC3jViKNluLYxQNYSP7FCfVJCs' //process.env.PETFINDER_SECRET;

export default async (req, res) => {
  console.log('Inside token.js')
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
  console.log(data)
  res.send(data);
};