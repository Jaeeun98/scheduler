import dayjs from 'dayjs';

const day = dayjs();
const start = day.startOf('month').format('d'); //이 달 1일의 요일
const end = day.endOf('month').format('DD');  //이 달의 마지막 날


export const now = {
    now: day.format('YYYY-MM-DD'),
    year: day.year(),
    mon: day.month() + 1,
    date: day.date(),
}

export const calendar = [];
for (let i=1; i<=start; i++) {
    calendar.push('');
} 
for(let i=1; i<35; i++){
    i <= end ? calendar.push(i) : calendar.push('');
}


