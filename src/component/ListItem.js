import "./Home.css"
const ListItem = (props) => {

    const { id, nama, umur, jenis_kelamin } = props.data;

    function handleChange(data) {
        props.setIsEdit(true);
        props.setDataEdit(data);
    }

    return (
        <tbody>
            <tr>
                <td>{nama}</td>
                <td>{umur}</td>
                <td>{jenis_kelamin}</td>
                <td className="removeBorder" onClick={() => props.hapusPengunjung({variables: {'id': id}})}><button>Hapus</button></td>
                <td className="removeBorder" onClick={() => handleChange(props.data)}><button>Edit</button></td>
            </tr>
        </tbody>
    )
}

export default ListItem;