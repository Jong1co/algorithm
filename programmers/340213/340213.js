/**
동영상 재생기 기능
- 10초전 prev
- 10초후 next
- 오프닝 건너뛰기 : 현재 재생 위치가 오프닝 구간인 경우 자동으로 오프닝 끝나는 위치 이동

- 1. 오프닝 사이 검사
- 2. 오프닝 사이라면 end로 이동 -> 동작 -> 1 반복
- 2.1 오프닝 사이가 아니라면 -> 동작 -> 1반복

여기에서 동작이란 +10 or -10을 하는데 각각 min = 0, max = video_len임
*/

const convert_time_to_seconds = (time) => {
  const [minutes, seconds] = time.split(':').map(Number);

  return minutes * 60 + seconds;
};

const padStart = (number) => {
  return String(number).padStart(2, '0');
};

const convert_seconds_to_time = (seconds) => {
  const minute = Math.floor(seconds / 60);
  const second = seconds % 60;

  return `${padStart(minute)}:${padStart(second)}`;
};

const is_opening_section = (current_position, op_start, op_end) => {
  return current_position >= op_start && current_position <= op_end;
};

const set_video_length = (video_len) => {
  return (command, current) => {
    return command === 'prev' ? Math.max(current - 10, 0) : Math.min(current + 10, video_len);
  };
};

function solution(video_len, pos, op_start, op_end, commands) {
  let current = convert_time_to_seconds(pos);
  let start = convert_time_to_seconds(op_start);
  let end = convert_time_to_seconds(op_end);
  let len = convert_time_to_seconds(video_len);
  let input_command = set_video_length(len);

  for (let i = 0; i < commands.length; i++) {
    const command = commands[i];

    if (is_opening_section(current, start, end)) {
      current = input_command(command, end);
    } else {
      current = input_command(command, current);
    }
  }

  return is_opening_section(current, start, end) ? convert_seconds_to_time(end) : convert_seconds_to_time(current);
}
