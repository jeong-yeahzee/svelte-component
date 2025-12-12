<script lang="ts">
  import type { Snippet } from "svelte";
  import Button from "./Button.svelte";
  import Icon from "./Icon.svelte";

  type Props = {
    element: HTMLDialogElement | undefined;
    header?: Snippet;
    content: Snippet;
    footer?: Snippet;
    onclose?: () => void;
    className?: string;
    style?: string;
  };

  let {
    element = $bindable(),
    header,
    content,
    footer,
    onclose,
    className = "",
    style = ""
  }: Props = $props();
</script>

<dialog bind:this={element} {onclose} class="modal {className}" {style}>
  {#if header}
    <div class="modal_title">
      <h6 class="tit_txt">{@render header()}</h6>
    </div>
  {/if}
  <div class="modal_content">
    {#if content}
      {@render content()}
    {:else}
      모달 내용
    {/if}
  </div>
  {#if footer}
    <div class="modal_footer">
      {@render footer()}
    </div>
  {/if}
  <div class="modal_close">
    <Button onclick={() => { element!.close(); }}>X</Button>
  </div>
</dialog>