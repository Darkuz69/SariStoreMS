export type IOperator = {
    operatorCode: string,
    password: string,
    isLoading: boolean,
    statusMessage: string | null,
    [key: string]: any
}

class Operator implements IOperator {
    operatorCode = $state<string>('');
    password = $state<string>('');
    isLoading = $state<boolean>(false);
    statusMessage = $state<string | null>(null);    


    constructor(operatorCode: string, password: string) {
        this.operatorCode = operatorCode;
        this.password = password;
    }
}

export { Operator };