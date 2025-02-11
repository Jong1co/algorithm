//솔루션을 함수를 복붙해주세요
function solution(schedules, timelogs, startday) {
  return schedules.reduce((acc, schedule, index) => {
    const success = timelogs[index].every((time, day) => {
      if (isWeekend(startday, day)) return true;
      return getScheduleTime(schedule) >= time;
    });
    return success ? acc + 1 : acc;
  }, 0);
}

const isWeekend = (startday, day) => ((startday + day - 1) % 7) + 1 >= 6;

const getScheduleTime = (schedule) => {
  const minutes = (schedule + 10) % 100;
  return minutes > 59 ? (Math.floor(schedule / 100) + 1) * 100 + (minutes % 60) : schedule + 10;
};
