<script lang="ts">
    let { variable, label, type, id, name, placeholder } :
    {
        variable: any,
        label: string,
        type: string,
        id: string,
        name: string,
        placeholder?: string,
    } = $props();
</script>

<div class="form-container">
    <label for={id}>{label}</label>
    <div class="input-container">
        <input {type} {id} {name} {placeholder} bind:value={variable}>
        {#if type === "password"}
            <img src="" alt="" height="24px" width="24px">
        {/if}
    </div>
</div>