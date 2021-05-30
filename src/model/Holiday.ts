interface Holiday {
  date: string;
  name: string;
  description: string;
  state: string;
}


interface BaseHoliday {
  date: string;
  holidayName: string;
  information: string;
  moreInformation: string;
}

interface HistoricalHoliday extends BaseHoliday {
  applicableTo: string;
}

interface RecentHoliday extends BaseHoliday {
  rawDate: string;
  jurisdiction: string;
}