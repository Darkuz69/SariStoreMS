interface IOperator {
    operatorCode: string,
    password: string,
    isLoading: boolean,
    errorMessage: string | null,
}

class Operator implements IOperator {
    operatorCode = $state<string>('');
    password = $state<string>('');
    isLoading = $state<boolean>(false);
    errorMessage = $state<string | null>(null);    


    constructor(operatorCode: string, password: string) {
        this.operatorCode = operatorCode;
        this.password = password;
    }

    static async login(operator: IOperator): Promise<boolean> {
        operator.isLoading = true;
        operator.errorMessage = null;

        try {
            const response = await fetch('http://localhost:3000/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    operatorId: operator.operatorCode,
                    password: operator.password
                })
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => {});
                operator.errorMessage = errorData.message || "❌ Invaild operator code or password.";
                return false;
            }

            return true;
        } catch(error) {
            operator.errorMessage = "❌ An error occurred while trying to login. Please try again later.";
            return false;
        } finally {
            operator.isLoading = false;
        }
    }
}

export { Operator };