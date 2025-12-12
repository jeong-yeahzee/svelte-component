<script lang="ts">
  type Props = {
    name: string|undefined;
    size?: string;
    color?: string;
  };
  let {
    name,
    size,
    color
  }: Props = $props();
</script>

<span class="icon {[name, size, color]}"></span>