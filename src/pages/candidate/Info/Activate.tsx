import React, { useEffect } from "react";
import axios from "axios";
// import { SampleProvider } from "../../../SampleContext";
import { RouteComponentProps } from "react-router-dom";
import { API } from "../../../config";

interface parsedType {
  token: string;
  uid: string;
}

const Activate = ({ history, location }: RouteComponentProps) => {
  const queryString = require("query-string");
  const parsed = queryString.parse(location.search);

  const certification = async (parsed: parsedType) => {
    await axios
      .post(`${API}user/verify`, {
        token: parsed.token,
        uid: parsed.uid,
      })
      .then(() => {
        localStorage.setItem("uid", parsed.uid);
        history.push("./Info");
      })
      .catch((error) => {
        console.log("error", error.res);
      });
  };

  useEffect(() => {
    certification(parsed);
  }, [parsed]);

  return <div></div>;
};

export default Activate;
