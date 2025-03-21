<script lang="ts">

    console.log("Use $$slots tells you what slot names have been passed.  Current value is",$$slots)

</script>

<div>
    {#if $$slots.header}
    <div>According to the variable $$slots, you past a slot with name 'header'</div>
    {/if}
    <slot name="header">
        This is a default slot header in SlotDemo
        <br/>
    </slot>
    <slot name="content">
        This is default slot for content in SlotDemo
        <br/>
    </slot>
    <slot name="footer">
        This is a default slot footer in SlotDemo
        <br/>
    </slot>
</div>


