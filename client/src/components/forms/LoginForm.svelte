<script lang="ts">
    import { Operator } from "../../models/Operator.svelte";
    import LoginInput from "../ui/LoginInput.svelte";

    const operator = new Operator('', '');
</script>

<form method="POST" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center flex-col bg-[var(--bg)] w-lg p-10 gap-7.5 shadow-lg rounded-2xl border-t-4 border-t-[var(--bg-light)]">
    <h1 class="text-3xl font-bold text-[var(--text)]">🏪 SariStoreMS Portal</h1>
    <LoginInput variable={operator.operatorCode} label="Operator Code" type="text" id="operatorCode" name="operatorCode"/>
    <LoginInput variable={operator.password} label="Password" type="password" id="password" name="password"/>
    <input type="submit" class="bg-[var(--primary)] hover:bg-[var(--secondary)] active:bg-[var(--primary)] text-[var(--highlight)] font-bold w-full p-2.5 rounded-2xl shadow-lg" value="Login"/>
</form>
