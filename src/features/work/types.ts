import { WorkPDF } from "../../types/sanityTypes";
import { Query } from "../shared/basicSanityTypes";

export interface WorkPdfQuery extends Query {
    result: Array<WorkPDF>
}