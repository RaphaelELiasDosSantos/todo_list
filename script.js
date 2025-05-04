var cont = 0;
function addTodoList() {
    $('#container-todo-list').append(`<div class="todolist_container" id="todolist_container_${cont}">
        <input type="text" class="todolist_input" id="todolist_input_${cont}" />
        <button class="todolist_button todolist_button_remove" type="button" onclick="removeTodoList(${cont});">Excluir</button>
        <button class="todolist_button todolist_button_print" type="button" onclick="printValue(${cont});">Print</button>
    </div>`);
    cont++;
}
function removeTodoList(tempNumber) {
    $('#todolist_container_' + tempNumber).remove();
}
function printValue(tempNumber) {
    let valueInput = $('#todolist_input_' + tempNumber).val();
    alert(valueInput);
}