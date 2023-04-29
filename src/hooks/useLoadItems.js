import { useEffect, useState } from "react";

const useLoadItems = () => {
    const [items, setItems] = useState([]);
    const [spinner, setSpinner] = useState(true);
    // // https://sleepy-mountain-69745.herokuapp.com/bikes
    // https://accel-moto.onrender.com/bikes

    useEffect(() => {
        fetch('https://accel-moto.onrender.com/bikes')
            .then(res => res.json())
            .then(data =>{
                setItems(data)
                setSpinner(false)
            });
    }, [items]);
    return [items, setItems, spinner];
}

export default useLoadItems;