import { useState } from "react";
export const Authenticate = ({ token, setToken }) => {
  const [successMessage, setSucessMessage] = useState(null);

  const handleClick = async () => {
    try {
      let response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      let data = await response.json();
      setSucessMessage(data.message);
      console.log(data);
    } catch (error) {
      setError();
    }
  };

  return (
    <>
      <h2>Auth</h2>
      <button onClick={handleClick}>Authentication Token</button>
      {successMessage}
    </>
  );
};
