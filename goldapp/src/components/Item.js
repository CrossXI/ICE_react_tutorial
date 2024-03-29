import "./Item.css"

function Item(props) {
    // กระจายค่า props
    const { data, deleteStudent } = props;
    return (
        <>
            <li key={data.id} className={data.gender}>
                <p style={{ fontStyle: 'italic' }}>{data.id} - {data.name}</p>
                <button style={{ backgroundColor: 'red' }} onClick={() => deleteStudent(data.id)}>Del</button>
            </li>
        </>
    );
}
export default Item;