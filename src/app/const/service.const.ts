import { environment } from "src/environments/environment";

const envPoint = environment.endPoint;

export const LOGIN_API = `${envPoint}/auth/login`;