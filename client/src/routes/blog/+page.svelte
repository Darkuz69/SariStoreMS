<script lang="ts">
    let { data } = $props();
</script>

<div>
    {#each data.posts as { id, title }}
        <li>
            <a href="/blog/{id}">{title}</a>
        </li>
    {/each}
</div>