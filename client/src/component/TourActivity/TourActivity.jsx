export default function TourActivity(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.difficulty}</td>
      <td>{props.duration}</td>
      <td>{props.season}</td>
    </tr>
  )
}