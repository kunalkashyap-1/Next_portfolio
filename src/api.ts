import axios from "axios";
import {Response} from "../models/configModel";

export async function getRepos(): Promise<Response[]> {
  try {
    const response = await axios.get<Response[]>(
      "https://gh-pinned-repos.egoist.dev/?username=kunalkashyap-1"
    );
    // console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.error("ERROR: ", error.message);
    throw error;
  }
}
