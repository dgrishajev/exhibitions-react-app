export const truncateString = (value: string) => value.length > 100
  ? `${value.substr(0, 97)}...`
  : value
