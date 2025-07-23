<script lang="ts">
    import BrandName from "./BrandName.svelte";
    import LoginInput from "./LoginInput.svelte";
</script>

<div class="flex flex-col items-center justify-evenly bg-gradient-to-b from-[var(--bg-light)] to-[var(--bg-dark)] rounded-2xl border-2 border-[var(--border)] border-t-4 border-t-[var(--highlight)] h-1/2 w-2/5 shadow-2xl">
    <div class="flex flex-col items-center gap-2.5 w-full">
        <BrandName />
        <p class="text-lg">Para sa bawat sari-sari store!!</p>
    </div>

    <form class="flex flex-col items-center gap-2.5 w-full">
        <LoginInput type="text" id="employee-id" name="employee-id" placeholder="" required={true}/>
        <LoginInput type="password" id="password" name="password" placeholder="" required={true}/>
        <LoginInput type="submit" id="login" name="login" value="Log in" style="bg-[var(--bg-light)]"/>
    </form>

    <a href="#" class="text-[var(--secondary)] underline">Forgot Password?</a>
</div>