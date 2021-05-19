function solve() {
    const [section1, section2, section3, section4] = document.querySelectorAll('section');
    const taskName = document.getElementById('task');
    const taskDate = document.getElementById('date');
    const taskDescrip = document.getElementById('description');

    const addBtn = section1.children[1].querySelector('button');

    addBtn.addEventListener('click', onAdd);

    function onAdd(ev) {
        ev.preventDefault();

        if (taskName.value != '' && taskDate.value && taskDescrip.value != '') {
            [taskName, taskDate, taskDescrip].forEach((el) => el.value = '');
        }
    }
}