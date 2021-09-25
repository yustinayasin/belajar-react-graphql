import { useState } from "react"
import "./Home.css"

function PassengerSearch(props) {
  const [id, setId] = useState('');
  const [editing, setEditing] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if(id) {
      let found = false;
      let i=0;
      const data = props.list.anggota;
      for(i;i<data.length;i++){
        if(data[i]['id']==id){
          found=true;
          break;
        }
      }
      if(found) {
        props.searchPengunjung({variables: {'id': id}});
        setId('');
      } else {
        alert("Tidak ada penumpang dengan ID tersebut");
      }
    } else {
      alert("Data masih kosong")
    }
  }

  const handleBukaInput = () => {
    setEditing(false);
  }

  const handleTutupInput = () => {
    setEditing(true);
  }

  let viewMode = {}
  let editMode = {}

  if (editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  return (
    <div className="passengerSearch">
      <form onSubmit={(e) => handleSearch(e)} style={viewMode}>
        <p>Masukkan ID</p>
        <input type="text" value={id} className="input-text" placeholder="Masukkan ID" name="nama" onChange={(e) => setId(e.target.value)} />
        <button onClick={handleTutupInput} style={{ marginLeft: "10px" }}>
          Selesai
        </button>
      </form>
      <button className="inputan" onClick={handleBukaInput} style={editMode}>
        Search By ID
      </button>
    </div>
  )
}

export default PassengerSearch;
