export default function getStudentIdsSum(list) {
  return list.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
