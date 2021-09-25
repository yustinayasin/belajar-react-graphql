import { useMutation } from '@apollo/client';
import {editQuery} from '../graphql/mutations';

export default function useEditAnggota () {
    const [editAnggota, {loading: loadingEdit}] = useMutation(editQuery);

    return {
        editAnggota,
        loadingEdit
    }
}