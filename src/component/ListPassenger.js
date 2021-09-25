import ListItem from './ListItem';
const ListPassenger = props => {
    return (
        <div>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                <thead bgcolor="red">
                    <tr>
                        <th>Nama</th>
                        <th>Umur</th>
                        <th>Jenis Kelamin</th>
                        <th bgcolor="white" className="removeBorder"></th>
                    </tr>
                </thead>
                {props.list.anggota.map((item, index) => (
                    <ListItem
                        key={index}
                        data={item}
                        isEdit={props.isEdit}
                        setIsEdit={props.setIsEdit}
                        setDataEdit={props.setDataEdit}
                        hapusPengunjung={props.hapusPengunjung}
                        editPengunjung={props.editPengunjung}
                    />
                ))}
            </table>
        </div>
    )
  }

export default ListPassenger;