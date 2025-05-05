export default function Input(props) {
  <input
    type={props.type}
    value={props.value}
    onSubmit={props.onSubmit}
    onChange={props.onChange}
    name={props.name}
  />;
}
