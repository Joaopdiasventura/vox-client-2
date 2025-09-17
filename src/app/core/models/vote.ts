import {Pool} from "./pool";
import {Candidate} from "./candidate"

export interface Vote{
    pool: Pool;
    candidate?: Candidate;
}