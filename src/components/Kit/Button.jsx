export default function Button(props) {
  <button className={props.className} onClick={props.onClick} type={props.type}>
    {props.children}
  </button>;
}
