<script lang="ts">
  import Button from "$lib/component/Button.svelte";
  import Modal from "$lib/component/Modal.svelte";
  

  let modal: HTMLDialogElement;

  function onclick(){
    modal.showModal();
  }
</script>

<Button {onclick}>모달 오픈</Button>

<Modal bind:element={modal}>
  {#snippet header()}
    <div>모달 헤더 영역</div>
  {/snippet}
  {#snippet content()}
    <div>모달 컨텐츠 영역</div>
  {/snippet}
  {#snippet footer()}
    <div>모달 푸터 영역</div>
  {/snippet}
</Modal>