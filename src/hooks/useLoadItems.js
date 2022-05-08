import { useEffect, useState } from "react";

const useLoadItems = () => {
    const [items, setItems] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch('https://sleepy-mountain-69745.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data =>{
                setItems(data)
                setSpinner(false)
            });
    }, []);
    return [items, setItems, spinner];
}

export default useLoadItems;