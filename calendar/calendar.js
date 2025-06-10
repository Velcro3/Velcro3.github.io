document.addEventListener('DOMContentLoaded', () => {
    // Remove these lines as the elements no longer exist in HTML
    // const currentMonthYearElem = document.getElementById('currentMonthYear');
    // const prevMonthBtn = document.getElementById('prevMonth');
    // const nextMonthBtn = document.getElementById('nextMonth');

    const calendarDaysElem = document.getElementById('calendarDays');

    let currentDate = new Date(); // Start with the current date (e.g., June 2025)

    function renderCalendar() {
        calendarDaysElem.innerHTML = ''; // Clear previous days

        const year = currentDate.getFullYear();
        const month = currentDate.getMonth(); // 0-indexed (0 for January)

        // Remove this line, as currentMonthYearElem no longer exists
        // const monthName = new Date(year, month).toLocaleString('default', { month: 'long' });
        // currentMonthYearElem.textContent = `${monthName} ${year}`;

        // Get the first day of the month and last day of the month
        const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 for Sunday, 1 for Monday, etc.
        const lastDayOfMonth = new Date(year, month + 1, 0).getDate(); // last day of the current month

        // Fill in empty days before the first day of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.classList.add('empty-day');
            calendarDaysElem.appendChild(emptyDay);
        }

        // Fill in the days of the month
        for (let day = 1; day <= lastDayOfMonth; day++) {
            const dayElem = document.createElement('div');
            dayElem.textContent = day;

            // Highlight the current day
            const today = new Date();
            if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dayElem.classList.add('current-day');
            }

             // Grey out 30th and 31st if they are not in the current month
            if ((day === 30 || day === 31) && day > lastDayOfMonth) {
                dayElem.classList.add('greyed-out');
            }

            calendarDaysElem.appendChild(dayElem);
        }
    }

    // Remove these event listeners as the buttons no longer exist
    // prevMonthBtn.addEventListener('click', () => {
    //     currentDate.setMonth(currentDate.getMonth() - 1);
    //     renderCalendar();
    // });

    // nextMonthBtn.addEventListener('click', () => {
    //     currentDate.setMonth(currentDate.getMonth() + 1);
    //     renderCalendar();
    // });

    // Initial render call remains, which will now execute without error
    renderCalendar();
});