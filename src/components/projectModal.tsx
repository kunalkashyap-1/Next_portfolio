import {Response} from "../../models/configModel";

interface inputProps{
    key: number; 
    data: Response;
}

export default function ProjectsModal({data}: inputProps){
    return <div>
        <p>{data.repo}</p>
        <p>githublink:- {data.link}</p>
        <p>website:- {data.website}</p>
        <p>image:- {data.image}</p>
    </div>
}