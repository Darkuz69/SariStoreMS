class Operator {
    operatorCode = $state<string>('');
    password = $state<string>('');
    isLoading = $state<boolean>(false);
    errorMessage = $state<string | null>(null);    


    constructor(operatorCode: string, password: string) {
        this.operatorCode = operatorCode;
        this.password = password;
    }

    async login() {
        this.isLoading = true;
        this.errorMessage = null;

        try {
            const response = await fetch('http://localhost:3000/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    operatorId: this.operatorCode,
                    password: this.password
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                this.errorMessage = errorData.message || "❌ Invaild operator code or password.";
                return false;
            }

            return true;
        } catch(error) {
            this.errorMessage = "❌ An error occurred while trying to login. Please try again later.";
            return false;
        } finally {
            this.isLoading = false;
        }
    }
}

export { Operator };