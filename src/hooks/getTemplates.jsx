import { useState, useEffect } from "react";
import env from "react-dotenv";

const useTemplates = () => {
  const [templates, setTemplates] = useState([]);

  const API_URL = env.API_URL || process.env.API_URL;

  const requestForTemplates = async () => {
    const responseFromAPI = await fetch(API_URL);
    const templatesFromAPI = await responseFromAPI.json();
    setTemplates(templatesFromAPI);
  };

  useEffect(() => {
    if (!templates.length) {
      // make request for the templates
      requestForTemplates();
    }
  }, []);

  return {
    templates,
    requestForTemplates,
  };
};

export default useTemplates;
