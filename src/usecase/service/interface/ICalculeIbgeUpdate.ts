import People from "src/domain/model/People";

export default interface ICalculeIbgeUpdate {
    execute(id: string, payload: People): Promise<any>
}