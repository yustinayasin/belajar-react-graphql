import { gql } from '@apollo/client';

export const editQuery = gql`
mutation MyMutation($id: Int!, $umur: Int!, $nama: String!, $jenis_kelamin: String!) {
  update_anggota_by_pk(pk_columns: {id: $id}, _set: {nama: $nama, umur: $umur, jenis_kelamin: $jenis_kelamin}) {
    id
  }
}
`;

export const deleteData = gql`
mutation MyMutation($id: Int!) {
    delete_anggota_by_pk(id: $id) {
      id
    }
  }
`;

export const insertItem = gql`
mutation MyMutation($umur: Int!, $nama: String!, $jenis_kelamin: String!) {
    insert_anggota_one(object: {jenis_kelamin: $jenis_kelamin, nama: $nama, umur: $umur}) {
      id
    }
  }
`;