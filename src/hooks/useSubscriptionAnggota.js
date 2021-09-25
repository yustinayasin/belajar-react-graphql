import { useSubscription } from '@apollo/client';
import {subsAllData} from '../graphql/subscribe';

export default function useMutationAnggota (variables) {
    const {data, loading, error} = useSubscription(subsAllData, variables);

    return {
        data,
        loading,
        error
    }
}