<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container bg-red-500">
          <div
            class="modal-header text-white font-semibold text-2xl text-center"
          >
            Ты совершил 2 ошибки! Экзамен провалён!
          </div>
          <div class="modal-footer flex justify-between flex-wrap">
            <button
              class="
                modal-default-button
                bg-white
                text-red-500 text-lg
                hover:bg-gray-200
                hover:text-red-700
                cursor-pointer
                transition
                shadow-lg
                duration-150
                ease-in-out
              "
              @click="$emit('close','again')"
            >
              Новая попытка
            </button>
            <button
              class="
                modal-default-button
                bg-white
                text-red-500 text-lg
                hover:bg-gray-200
                hover:text-red-700
                cursor-pointer
                transition
                shadow-lg
                duration-150
                ease-in-out
              "
              @click="$emit('close', 'exit')"
            >
              Завершить
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 25rem;
  margin: 0px auto;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-header {
  padding: 20px;
}
.modal-header h3 {
  margin: 0;
  color: white;
}

.modal-body {
  margin: 10px 0px;
  padding: 20px 20px;
}
.modal-footer {
  padding: 20px;
  .modal-default-text {
    flex: 1;
  }
  .modal-default-button {
    cursor: pointer;
    border: none;
    border-radius: 3px;
    padding: 8px 16px;
    transition: 0.3s;
  }
}
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>