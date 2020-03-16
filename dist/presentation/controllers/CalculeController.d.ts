import ICalcule from 'src/usecase/service/ICalcule';
export declare class CalculeController {
    private readonly calculator;
    constructor(calculator: ICalcule);
    calcule(body: any): Promise<import("@roit/roit-response-handler/src/ResponseModel").ResponseModel>;
}
