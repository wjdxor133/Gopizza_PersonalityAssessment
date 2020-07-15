import React, { useEffect } from "react";
import axios from "axios";
import { API } from "../../../config";

interface propsType {
  history: object;
  location: locationType;
}

interface locationType {
  pathname: string;
  search: string;
  hash: string;
  state: undefined;
}

interface parsedType {
  token: string;
  uid: string;
}

const Activate = ({ history, location }: propsType) => {
  const queryString = require("query-string");

  const certification = async (parsed: parsedType) => {
    await axios
      .post(`${API}user/verify`, {
        token: parsed.token,
        uid: parsed.uid,
      })
      .then((res) => {
        alert("성공" + res);
        // history.push();
      })
      .catch((error) => {
        console.log("error", error.res);
      });
  };

  useEffect(() => {
    const parsed = queryString.parse(location.search);
    certification(parsed);
  }, [location.search, queryString]);

  return <div></div>;
};

export default Activate;
