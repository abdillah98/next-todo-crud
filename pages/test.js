export default function Test() {

  const arrayData = ['abdillah', 'romdan']
  const objectData = {
    id: null, 
    name: 'Toto',
    phone: '0813233424',
    active: false
  }

  const arrayObject = [
    {
      id: 0, 
      name: 'Abdillah',
      phone: '081323342334',
      active: false
    },
    {
      id: 1, 
      name: 'Romdan',
      phone: '081323342876',
      active: true
    }
  ]

  const concatData = [...arrayObject, {...objectData, id: arrayObject.length}]

  console.log(objectData)
  console.log(concatData)
  console.log(concatData[1].name !== 'Romdan')


  return(
    <ul>
      {concatData.filter(row => !row.active).map(row =>
        <li>{row.id + 1}. {row.name} | {row.phone}</li>
      )}
    </ul>
  )
}