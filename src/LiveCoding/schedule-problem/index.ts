const assert = require("assert");

// Implemente uma função que junte os horários de funcionamento de um estabelecimento. A função recebe como um argumento no formato {day, open, close},
// onde day é dia da semana (mon,tue,wed,thu,fri,sat,sun) e retorna uma string juntando períodos iguais em dias diferentes. Quando 2 dias seguidos apresentam
// o mesmo período, listar eles separados por vírgula (Monday,Tuesday) e quando há mais do que 2 dias consecutivos no mesmo período, listar eles separados por
// hífen (Monday -Thursday)
const WEEKDAY_NAME = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
  sat: "Saturday",
  sun: "Sunday",
};
const joinOpeningHours = function (
  periods: {
    day: string;
    open: string;
    close: string;
  }[],
) {
  const daysByTime = new Map<string, string[]>();

  for (const period of periods) {
    const k = `${period["open"]}-${period["close"]}`;
    const days = daysByTime.get(k) || [];
    daysByTime.set(k, days.concat([period["day"]]));
  }
  //  [08:00-12:00, [mon, tue]]

  const result = [...daysByTime.entries()]
    .map(([time, days]) => {
      let formatedWeekDays = "";
      const startWeekName = WEEKDAY_NAME[days[0]];
      const endWeekName = WEEKDAY_NAME[days[days.length - 1]];

      if (days.length === 1) {
        formatedWeekDays = `${startWeekName}`;
      } else if (days.length === 2) {
        formatedWeekDays = `${startWeekName},${endWeekName}`;
      } else if (days.length > 2) {
        formatedWeekDays = `${startWeekName}-${endWeekName}`;
      }

      return `${formatedWeekDays}, ${time}`;
    })
    .join(", ");

  return result;
};

// dias diferentes e períodos diferentes
assert.strictEqual(
  joinOpeningHours([
    { day: "mon", open: "08:00", close: "12:00" },
    { day: "tue", open: "13:00", close: "18:00" },
  ]),
  `Monday, 08:00-12:00, Tuesday, 13:00-18:00`,
);
// 2 dias diferentes e períodos iguais
assert.strictEqual(
  joinOpeningHours([
    { day: "mon", open: "08:00", close: "12:00" },
    { day: "mon", open: "13:00", close: "18:00" },
    { day: "tue", open: "08:00", close: "12:00" },
    { day: "tue", open: "13:00", close: "18:00" },
  ]),
  `Monday,Tuesday, 08:00-12:00, Monday,Tuesday, 13:00-18:00`,
);
// Mais que 2 dias diferentes e períodos iguais
assert.strictEqual(
  joinOpeningHours([
    { day: "mon", open: "08:00", close: "12:00" },
    { day: "tue", open: "08:00", close: "12:00" },
    { day: "wed", open: "08:00", close: "12:00" },
    { day: "thu", open: "08:00", close: "12:00" },
  ]),
  `Monday-Thursday, 08:00-12:00`,
);
// Vários casos ao mesmo tempo
assert.strictEqual(
  joinOpeningHours([
    { day: "mon", open: "08:00", close: "12:00" },
    { day: "tue", open: "08:00", close: "12:00" },
    { day: "wed", open: "08:00", close: "12:00" },
    { day: "thu", open: "09:00", close: "11:00" },
    { day: "fri", open: "09:00", close: "11:00" },
    { day: "sat", open: "12:00", close: "15:00" },
    { day: "sun", open: "14:00", close: "18:00" },
  ]),
  `Monday-Wednesday, 08:00-12:00, Thursday,Friday, 09:00-11:00, Saturday, 12:00-15:00, Sunday, 14:00-18:00`,
);

console.log("Rodou liso");
