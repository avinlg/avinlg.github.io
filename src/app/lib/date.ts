const getDateOrdinal = (date: number) => {
  const suffix = [3,23].includes(date) 
    ? 'rd'
    : [2,23].includes(date)
    ? 'nd'
    : [1,21,31].includes(date)
    ? 'st'
    : 'th';
  return ( date + suffix);
}

const getMonthName = (month: number) => {
  return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][month];
}

const getDateWithOrdinals = (date?: Date) => {
  if (date === undefined) {
    date = new Date();
  }
  return `${getDateOrdinal(date.getDate())} of ${getMonthName(date.getMonth())}, ${date.getFullYear()}`
}

export default getDateWithOrdinals;