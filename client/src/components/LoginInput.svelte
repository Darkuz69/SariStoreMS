<script lang="ts">
    import eye_off from "$lib/assets/eye-off.svg?url";
    import eye_on from "$lib/assets/eye.svg?url";

    let { type, name, id, value, placeholder, required, style }: {
        type: string,
        id: string,
        name: string,
        value?: string,
        placeholder?: string
        required?: boolean
        style?: string 
    } = $props();

    let cursorType = (type === "password" || type === "number" || type === "text") ? "cursor-text" : "cursor-pointer";
    let baseType = type;    // Save type for passwords input
    
    let focusState = $state(false);
    let showPassword = $state(false);

    let eyeSrc = $derived((showPassword) ? eye_off : eye_on);
    let preLabel = $derived((showPassword) ? "Hide" : "Show");
    let altText = $derived((showPassword) ? "hide" : "show");

    const handleClick = (e: Event) => {
        e.preventDefault();
        showPassword = !showPassword;
        type = (showPassword) ? "text" : "password";
    }
</script>

<label {id} class="flex items-center bg-[var(--bg)] border-2 border-[var(--border-muted)] {focusState && 'border-[var(--highlight)]'} rounded-2xl p-2.5 w-3/4 {style} {cursorType}">
    <input {id} {type} {name} {value} {placeholder} {required} class="text outline-0 flex-1 {cursorType}" onfocusin={() => { focusState = true }} onfocusout={() => {focusState = false}}>
    {#if baseType === "password"}
        <button class="ml-2 cursor-pointer" aria-label="{preLabel} Password" onclick={handleClick}>
            <img alt="{altText} icon" src={eyeSrc}>
        </button>
    {/if}
</label>
