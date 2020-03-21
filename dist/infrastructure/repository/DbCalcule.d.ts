import IDbCalcule from "./IDbCalcule";
import People from "src/domain/model/People";
export declare class DbCalcule implements IDbCalcule {
    create(people: People): Promise<any>;
}
