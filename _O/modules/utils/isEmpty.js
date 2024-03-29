module.exports = isEmpty = (value) =>
  value === null ||
  value === undefined ||
  (typeof value === "string" && value.trim().length === 0) ||
  (typeof value === "object" && Object.keys(value).length === 0)