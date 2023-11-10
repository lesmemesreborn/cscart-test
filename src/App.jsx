import './App.css'
import FilterWidget from "./components/widgets/FilterWidget/FilterWidget.jsx";
import {useEffect, useState} from "react";
import {fetchFilterData} from "./components/api/api.js";
import {useDispatch} from "react-redux";
import {setFilters} from "./redux/slices/filterSlice.js";

function App() {
    const dispatch = useDispatch()
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        setIsFetching(true)
        fetchFilterData()
            .then((data) => {
                dispatch (setFilters(data))
                setIsFetching(false)
            })
            .catch(() => {
                dispatch (setFilters([]))
                setIsFetching(false)
            });
    }, [dispatch]);

    if (isFetching) {
        return <div>Идет загрузка данных...</div>;
    }

  return <FilterWidget />

}

export default App
