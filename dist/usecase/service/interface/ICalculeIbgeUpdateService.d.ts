import People from "src/domain/model/People";
export default interface ICalculeIbgeUpdateService {
    execute(id: string, payload: People): Promise<any>;
}
