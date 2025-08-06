<script lang="ts">
    import eye_on from "$lib/assets/icons/eye.svg";
    import eye_off from "$lib/assets/icons/eye-off.svg"

    let { variable, label, type, id, name, placeholder } :
    {
        variable: any,
        label: string,
        type: string,
        id: string,
        name: string,
        placeholder?: string,
    } = $props();

    let isFocus : boolean = $state(false); 
    let isHidden : boolean = $state(true);

    let inputType = $derived(type === "password" ? (isHidden ? "password" : "text") : type);
</script>

<div class="flex flex-col relative w-full border-2 border-[var(--border)] p-2.5 rounded-2xl bg-[var(--bg)] shadow-lg">
    <label class="absolute {isFocus ? '-top-3 text-sm bg-[var(--bg)] pl-0.5 pr-0.5 rounded-sm' : 'top-2.5'} left-2 text-[var(--text-muted)] transition-all" for={id}>{label}</label>
    <div class="flex w-full">
        <input class="w-full outline-0" type={inputType} {id} {name} {placeholder} bind:value={variable} onfocusin={() => isFocus = true} onfocusout={() => {if(variable.length === 0) isFocus = false}} />
        {#if type === 'password'}
            <button type="button" onclick={() => isHidden = !isHidden}>
                <img src={isHidden ? eye_on : eye_off} alt=""/>
            </button>
        {/if}
    </div>
</div>

<style>

</style>