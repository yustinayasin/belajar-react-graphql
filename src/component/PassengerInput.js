import { useState, useEffect } from "react"
import "./Home.css"

function PassengerInput(props) {
  const [state, setState] = useState({
    nama: "",
    umur: "",
    jenisKelamin: "Pria"
  })

  useEffect(() => {
    if(props.isEdit) {
      setState({
        ...state,
        nama: props.data.nama,
        umur: props.data.umur,
        jenisKelamin: props.data['jenis_kelamin']
      });
    } else {
      setState({
        ...state,
        nama: "",
        umur: "",
        jenisKelamin: "Pria",
      });
    }
  }, [props.data, props.isEdit])

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    if (state.nama.trim() && state.umur && state.jenisKelamin) {
      const umur = state.umur
      if (umur >= 75 || umur <= 12) {
        alert("Umur tidak sesuai")
      } else {
        props.tambahPengunjung({variables: {'nama': state.nama, 'umur': state.umur, 'jenis_kelamin': state.jenisKelamin}})  
        setState({
          ...state,
          nama: "",
          umur: "",
          jenisKelamin: "Pria",
        });
      }
    } else {
      alert("Data masih ada yang kosong")
    }
  }

  const handleEdit = () => {
    if (state.nama.trim() && state.umur && state.jenisKelamin) {
      const umur = state.umur
      if (umur >= 75 || umur <= 12) {
        alert("Umur tidak sesuai")
      } else {
        props.editPengunjung({variables: {'id': props.data.id, 'nama': state.nama, 'umur': state.umur, 'jenis_kelamin': state.jenisKelamin}}); 
        setState({
          ...state,
          nama: "",
          umur: "",
          jenisKelamin: "Pria",
        });
        props.setIsEdit(!props.isEdit);
      }
    } else {
      alert("Data masih ada yang kosong")
    }
  }

  return (
      <div 
        onSubmit={handleSubmit} 
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h3 style={{margin: "0"}}>Form {props.isEdit ? "Edit Anggota" : "Tambah Anggota"}</h3>
        <p>Masukkan Nama Anda</p>
        <input type="text" className="input-text" placeholder="Nama anda ..." value={state.nama} name="nama" onChange={onChange} />
        <p>Masukkan Umur Anda</p>
        <input type="number" className="input-text" placeholder="Umur anda ..." value={state.umur} name="umur" onChange={onChange} />
        <p>Masukkan Jenis Kelamin Anda</p>
        <select onChange={onChange} name="jenisKelamin" value={state.jenisKelamin}>
          <option value="Pria">Pria</option>
          <option value="Wanita">Wanita</option>
        </select>
        <div className="btn-wrapper" style={{marginTop: "30px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
          <button onClick={props.isEdit ? handleEdit : handleSubmit}>{props.isEdit ? "Edit" : "Submit"}</button>
          {
            props.isEdit &&
            <button style={{marginLeft: "20px"}} onClick={() => props.setIsEdit(false)}>Cancel Edit</button>
          }
        </div>
      </div>
  )
}

export default PassengerInput;
