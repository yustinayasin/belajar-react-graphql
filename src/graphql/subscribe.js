import { gql } from '@apollo/client';

export const subsAllData = gql`
subscription MySubscription($where: anggota_bool_exp = {}) {
  anggota(where: $where) {
    id
    nama
    umur
    jenis_kelamin
  }
}
`;