import { useQuery } from '@tanstack/react-query';


const getBooks = async () => {
    await fetch("https://anapioficeandfire.com/api/books")
        .then((res) => {
            const result = res.json()
            return result
        })
}

export const UseGetBooks = () => {
    const { isLoading, isFetching, error, data, } = useQuery(['GetBooks'], async () =>
        fetch("https://anapioficeandfire.com/api/books").then((res) => {
            const result = res.json();
            console.log({ result });
            return result;
        }));
    return { isLoading, isFetching, error, data, };
};
