export default function ListItem(props){
    return(
        <div>
            {props.name}
        </div>
    )
}

// this is how we could destructure the props so we dont need to call them using dot notation
// export default function ListItem({name}){
//     return(
//         <div>
//             {name}
//         </div>
//     )
// }