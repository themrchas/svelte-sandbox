<script lang="ts">

    console.log("Use $$slots tells you what slot names have been passed.  Current value is",$$slots)

    const onmouseenter = (event:Event) => {
        console.log('mouse just entered the slot "content" area')
    }

    const onmouseleave = (event:Event) => {
        console.log('mouse just left the slot "content" area')
    }

</script>

<div>
    {#if $$slots.header}
    <div>According to the variable $$slots, you past a slot with name 'header'</div>
    {/if}
    <slot name="header">
        This is a default slot header in SlotDemo
        <br/>
    </slot>
    <div {onmouseenter} {onmouseleave}>
    <slot name="content">
        This is default slot for content in SlotDemo
        <br/>
        </slot>
    </div>
       <slot name="footer">
        This is a default slot footer in SlotDemo
        <br/>
    </slot>
</div>


