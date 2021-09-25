import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from './PassengerInput';
import PassengerSearch from './PassengerSearch';
import ListPassenger from './ListPassenger';
import Header from './Header';
import { useState, useEffect } from 'react';
import useSubscribe from '../hooks/useSubscriptionAnggota';
import useDeleteAnggota from '../hooks/useDeleteAnggota';
import useEditAnggota from '../hooks/useEditAnggota';
import useInsertAnggota from '../hooks/useInsertAnggota';

const Home = () => {
    const [angotaGetQuery, setAnggotaGetQuery] = useState({
      variables: {where: {}}
    });
    
    const {editAnggota, loadingEdit} = useEditAnggota();
    const {deleteAnggota, loadingDelete} = useDeleteAnggota();
    const {insertAnggota, loadingInsert} = useInsertAnggota();
    const {data, loading, error} = useSubscribe(angotaGetQuery);

    const [idSearch, setIdSearch] = useState('');
    const [list, setList] = useState([]);
    const [dataEdit, setDataEdit] = useState({});
    const [jenisKelamin, setJenisKelamin] = useState('');
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
      setAnggotaGetQuery({
        variables: {
          where: {
            jenis_kelamin: {
              _eq: jenisKelamin
            }
          }
        }
      });
    }, [jenisKelamin]);

    useEffect(() => {
      setAnggotaGetQuery({
        variables: {
          where: {}
        }
      });
    }, []);

    const getAllData = () => {
      setAnggotaGetQuery({
        variables: {
          where: {}
        }
      });
    };

    const getById = (e, id) => {
      e.preventDefault();
      if(id) {
        let found = false;
        let i=0;
        for(i;i<data.anggota.length;i++){
          if(data.anggota[i]['id']==id){
            found=true;
            break;
          }
        }
        if(found) {
          setAnggotaGetQuery({
            variables: {
              where: {
                id: {
                  _eq: id
                }
              }
            }
          })
          setIdSearch('');
        } else {
          alert("Tidak ada penumpang dengan ID tersebut");
        }
      } else {
        alert("Data masih kosong")
      }
    }

    return (
        <div className="home">
            <Header/>
            <button style={{ width: "100px", alignSelf: "center"}} onClick={getAllData}>Get All Data</button>
            <form className="search" style={{ margin: "20px 0"}} onSubmit={(e) => getById(e, idSearch)}>
              <input type="text" placeholder="Masukkan id" onChange={(e) => setIdSearch(e.target.value)}/>
              <button style={{ marginLeft: "10px" }}>
                Search
              </button>
            </form>
            <select style={{ width: "100px", alignSelf: "center", marginBottom: "10px"}} onChange={(e) => setJenisKelamin(e.target.value)} value={jenisKelamin}>
              <option value="Pria">Pria</option>
              <option value="Wanita">Wanita</option>
            </select>
            {
                loading ? "Loading..." :
                <ListPassenger 
                    list={data}
                    hapusPengunjung={deleteAnggota}
                    editPengunjung={editAnggota}
                    setIsEdit={setIsEdit}
                    isEdit={isEdit}
                    setDataEdit={setDataEdit}
                />
            }
            <div className="fitur">
                <PassengerInput
                    data={dataEdit}
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                    tambahPengunjung={insertAnggota}
                    editPengunjung={editAnggota}
                />
            </div>
        </div>
    );
}

export default Home;