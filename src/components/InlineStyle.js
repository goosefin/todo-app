//JSX does not accept styling as strings but they do accept objects
const header = {
    color:'red',
    textAlign: 'center',
    fontSize: '60px'
}

export default function InlineStyle(){
    return (
        <div>
            <h1 style={header}>This uses inline styling</h1>
        </div>
    )
}