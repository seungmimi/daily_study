export default function ModeListItem(props) {
    return (
        <li>
            <button key = {props.index} onClick={props.onClickFn}>기분이 : {props.mode}</button>
        </li>
    )
}