import IDbCalcule from 'src/infrastructure/database/IDbCalcule';
export declare class CalculeController {
    private readonly calculator;
    constructor(calculator: IDbCalcule);
    calcule(body: any): Promise<import("@roit/roit-response-handler/src/ResponseModel").ResponseModel>;
}
