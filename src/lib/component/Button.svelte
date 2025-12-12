<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    element?: HTMLButtonElement | undefined;
    children: Snippet;
    onclick?: (e: MouseEvent) => void;
    onblur?: (e: FocusEvent) => void;
    onkeyup?: (e: KeyboardEvent) => void;
    className?: string;
    disabled?: boolean;
  };

  let {
    element = $bindable(),
    children,
    onclick = () => {},
    onblur = () => {},
    onkeyup = () => {},
    className = "",
    disabled = false
  }: Props = $props();
</script>

<button
  type="button"
  bind:this={element}
  class="btn {className}"
  {onclick}
  {onblur}
  {onkeyup}
  {disabled}>
  {@render children()}
</button>
