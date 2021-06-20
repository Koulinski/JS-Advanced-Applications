function solve() {
    let [name, hall, ticketPrice] = Array.from(document.querySelectorAll('form>div>input'));
    const onScreenBtn = document.querySelector('form>div>button');
    onScreenBtn.addEventListener('click', (ev) => {
        ev.preventDefault();

        if (name.value == '' || hall.value == '' ||
            (ticketPrice == '' || typeof Number(ticketPrice) != 'number')) {
            return;
        }
        console.log(onScreenBtn)[name, hall, ticketPrice].map((el => el.value = ''))
    })
}