import { gql } from '@apollo/client';

export const loadData = gql`
query MyQuery {
    anggota {
      id
      nama
      umur
      jenis_kelamin
    }
  }
  
`;

export const searchByID = gql`
query MyQuery($_eq: Int!) {
  anggota(where: {id: {_eq: $_eq}}) {
    id
    nama
    umur
    jenis_kelamin
  }
}
`;

export const searchByGender = gql`
query MyQuery($_eq: String!) {
  anggota(where: {jenis_kelamin: {_eq: $_eq}}) {
    id
    nama
    umur
    jenis_kelamin
  }
}
  `;

  export const ids = gql`
  query MyQuery {
    anggota {
      id
    }
  }
  `;

  export const queryWhere = gql`
  query MyQuery($where: anggota_bool_exp = {}) {
    anggota(where: $where) {
      id
      nama
      umur
      jenis_kelamin
    }
  }
  `;