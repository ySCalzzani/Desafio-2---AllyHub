import { useEffect, useState } from "react";
import { fetchCities } from "../../../helpers/api";
import Select from "react-select";



const DropdownCities = ({callbackOnChange = () => {}}) => {


    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetchCities().then((cities) => {
            return cities.map((city) =>{
                return{label: city.name_ptbr, value: city.id}
            })
        }).then((cities) =>{
            setCities(cities);
        });
    }, []);


    const handleChange = (e) => {
        callbackOnChange(e.map((city) => {
            return {nome: city.label, id: city.value};
        }));
        return; 
    }
    

    return (
        <Select 
            className="select"
            isMulti
            options = {cities}
            onChange = {handleChange}
        />
    );
};


export default DropdownCities;
//<option value="">Selecione as cidades.. </option>