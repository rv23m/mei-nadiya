import axios from "axios";

export const FHIR_BASE_INSTANCE = axios.create({
  baseURL: "https://hapi.fhir.org/baseR4",
});

export default FHIR_BASE_INSTANCE;
