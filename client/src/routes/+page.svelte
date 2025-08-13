<script lang="ts">
    import { Operator } from "../models/Operator.svelte";
    import LoginInput from "../components/ui/LoginInput.svelte";

    let { form } = $props();
    const operator = new Operator('', '');

    const handleSubmit = async(event: Event) => {
        event.preventDefault();

        const { operatorCode, password } = operator;
        operator.isLoading = true;
        operator.statusMessage = null;

        if(!operatorCode.trim() || !password.trim()) {
            operator.statusMessage = "❌ Please fill in all fields.";
            operator.isLoading = false;

            console.error(operator.statusMessage);
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/api/v1/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ operatorCode, password }),
                credentials: "include"
            });

            if(!response.ok) {
                const errorData = await response.json();
                operator.statusMessage = errorData.message || "❌ An error occurred while logging in.";
                operator.isLoading = false;

                console.error(operator.statusMessage);
                return;
            }

            const data = await response.json();
            operator.statusMessage = data.message || "✅ Login successful.";

            console.log(operator.statusMessage);
        } catch(error) {
            operator.statusMessage = "❌ An error occurred while logging in.";
            console.error(operator.statusMessage, error);
        } finally {
            operator.isLoading = false;
        }
    }
</script>

<form onsubmit={handleSubmit}
    class="absolute top-1/2 left-1/2
        transform -translate-x-1/2 
        -translate-y-1/2 flex 
        items-center flex-col bg-[var(--bg)] 
        w-lg p-10 gap-7.5 shadow-lg rounded-2xl
        border-t-4 border-t-[var(--bg-light)]">

    <h1 class="text-3xl font-bold text-[var(--text)]">🏪 SariStoreMS Portal</h1>
    <LoginInput variable={operator} label="Operator Code" type="text" id="operatorCode" name="operatorCode"/>
    <LoginInput variable={operator} label="Password" type="password" id="password" name="password"/>
    <input type="submit" 
        class="bg-[var(--primary)] hover:bg-[var(--secondary)]
            active:bg-[var(--primary)] text-[var(--highlight)] 
            font-bold w-full p-2.5 rounded-2xl shadow-lg" value="Login"/>
</form>

<button class="absolute top-5 right-5 text-[var(--text-muted)] hover:text-[var(--text)]"
    onclick={async() => {
        try {
            const response = await fetch("http://localhost:3000/api/v1/auth/logout", {
                method: "POST",
                credentials: "include"
            });

            if(!response.ok) {
                const errorData = await response.json();
                console.error("❌ Logout failed:", errorData.message);
                return;
            }

            console.log("✅ Logout successful.");
            window.location.reload();
        } catch(error) {
            console.error("❌ An error occurred while logging out:", error);
        }
    }}>
    Logout
</button>

<style>

</style>