import IDbCalcule from "./IDbCalcule";
import People from "src/domain/model/People";

export class DbCalcule implements IDbCalcule {
    async create(people: People): Promise<any> {
        let infoPeople: any[]

        infoPeople = [
            { id: 1, name: "Felipe", cpf: "1220144541" },
            { id: 2, name: "Felipe", cpf: "1220144541" },
            { id: 3, name: "Felipe", cpf: "1220144541" },
            { id: 4, name: "Felipe", cpf: "1220144541" },
            { id: 5, name: "Felipe", cpf: "1220144541" },
            { id: 6, name: "Felipe", cpf: "1220144541" },
            { id: 7, name: "Felipe", cpf: "1220144541" },
            { id: 8, name: "Felipe", cpf: "1220144541" },
        ]
    }

}