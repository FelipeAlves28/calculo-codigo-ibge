export default interface IDbCalculeFindById {
    findById(id: string): Promise<any>
}