const formatDate = (
  date?: string | number | Date,
  formatvalue: string = "dd.mm.yyyy"
) => {
  // get formated date separator
  const separator: string = formatvalue.includes(".")
    ? "."
    : formatvalue.includes("-")
    ? "-"
    : "/";

  // splited format date
  const splitedFormat: string[] = formatvalue.split(`${separator}`);

  // date to date format
  const selectedDate: Date = new Date(date!);

  // date
  const mm: number = selectedDate.getMonth() + 1;
  const dd: number = selectedDate.getDate();
  const yyyy: number = selectedDate.getFullYear();

  // get date index
  const yearIndex = splitedFormat.indexOf("yyyy");
  const monthIndex = splitedFormat.indexOf("mm");

  // format date
  if (yearIndex == 0 && monthIndex == 1)
    return `${yyyy}${separator}${mm < 10 ? "0" + mm : mm}${separator}${
      dd < 10 ? "0" + dd : dd
    }`;
  else if (yearIndex == 2 && monthIndex == 1)
    return `${dd < 10 ? "0" + dd : dd}${separator}${
      mm < 10 ? "0" + mm : mm
    }${separator}${yyyy}`;
  else if (yearIndex == 0 && monthIndex == 2)
    return `${yyyy}${separator}${dd < 10 ? "0" + dd : dd}${separator}${
      mm < 10 ? "0" + mm : mm
    }`;
  else
    return `${mm < 10 ? "0" + mm : mm}${separator}${
      dd < 10 ? "0" + dd : dd
    }${separator}${yyyy}`;
};

formatDate('06.04.2004') // '06.04.2004'
formatDate('06.04.2004', "'mm.dd.yyyy'") // '04.06.2004'
formatDate('06.04.2004', "'yyyy/dd/mm'") // '2004/06/04'
formatDate('06.04.2004', "'yyyy-dd-mm'") // '2004-06-04'

// input date: data or Date, format: 'mm.dd.yyyy' default
// mm: month
// yyyy: year
// dd: day
// separator: '.' , '-' , '/' 
