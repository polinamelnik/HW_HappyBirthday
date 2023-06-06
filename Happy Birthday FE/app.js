function congratulate() {
    const enteredDate = new Date(document.getElementById("дата").value);
    const today = new Date();

    if (
        enteredDate.getDate() === today.getDate() &&
        enteredDate.getMonth() === today.getMonth() &&
        enteredDate.getFullYear() === today.getFullYear()
    ) {
        alert("С днем рождения! Пусть сбудутся все Ваши мечты!");
    } else {
        alert("Сегодня не ваш день рождения. Но всё равно хорошего дня!");
    }
}









