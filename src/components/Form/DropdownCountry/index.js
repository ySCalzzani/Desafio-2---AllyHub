import { useEffect, useState } from "react";
import { fetchCountries } from "../../../helpers/api";
import Select from "react-select"; 


const DropdownCountries = ({callbackOnChange = () => {} }) => {
    const [countries,setCountries] = useState([]);


    useEffect(() => {
        fetchCountries().then((countries) => {
            return countries.map((country) =>{
                return{label: country.name_ptbr, value: country.code};
            })
        }).then((countries) => {
            setCountries(countries);
            });
    }, []);
    
    const handleChange = (e) => {
        callbackOnChange(e.map((country) => {
            return {nome: country.label, id: country.value};
        }));
        return;
    };

    return(
        <Select 
            className="select"
            isMulti
            options = {countries}
            onChange = {handleChange}
            name = "cidade"
        />
    );
};

export default DropdownCountries;