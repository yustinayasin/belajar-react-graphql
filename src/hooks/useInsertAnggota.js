import { useMutation } from '@apollo/client';
import {insertItem} from '../graphql/mutations';

export default function useInsertAnggota () {
    const [insertAnggota, {loading: loadingDelete}] = useMutation(insertItem);

    return {
        insertAnggota,
        loadingDelete
    }
}