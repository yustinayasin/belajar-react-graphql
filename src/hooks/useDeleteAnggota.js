import { useMutation } from '@apollo/client';
import {deleteData} from '../graphql/mutations';

export default function useDeleteAnggota () {
    const [deleteAnggota, {loading: loadingDelete}] = useMutation(deleteData);

    return {
        deleteAnggota,
        loadingDelete
    }
}