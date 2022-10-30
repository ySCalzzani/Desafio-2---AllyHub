import React from 'react'
import { useState } from 'react'
import DropdownCountries from '../components/Form/DropdownCountry';
import DropdownCities from '../components/Form/DropdownCities';

const Main = () => {

    const [data, setData] = useState({
        nome:"",
        email:"",
        telefone: "",
        cpf: "",
        pais: "",
        cidade: ""
    }); 

    const handleChange = (e) => {
        setData(prev => ({...prev,[e.target.name]: e.target.value}))
    };

    const handleSelectChange = (e) => {
        console.log(e[0].id)
        if(isNaN(e[0].id)){
            const countryHolder = e.map((holder) => {
                return holder.nome
            })
            setData(prev => ({...prev, pais: countryHolder}));
        } else {
            const cityHolder = e.map((holder) => {
                return holder.nome
            })
            setData(prev => ({...prev, cidade: cityHolder}))
        }
    };

    console.log(data)

  return (
<div className='maincontainer'>
           <div className='leftcontainer'>
                <h3>Dados Pessoais</h3>
                <form>
                    <label htmlFor='nome'>Nome</label><br></br>
                    <input        
                       type="text" 
                       name="nome" 
                       onChange={handleChange}
                    /><br></br>

                    <label htmlFor='nome'>Email</label><br></br>
                    <input        
                       type="text" 
                       name="email" 
                       onChange={handleChange}
                    /><br></br>

                    <label htmlFor='nome'>Telefone</label><br></br>
                    <input        
                       type="text" 
                       name="telefone" 
                       onChange={handleChange}
                    /><br></br>

                    <label htmlFor='nome'>CPF</label><br></br>
                    <input        
                       type="text" 
                       name="cpf" 
                       onChange={handleChange}
                    /><br></br>
               </form>
        </div>        


        <div className='rightcontainer'>
            <h3>Destinos de Interesse</h3>
            <form>
                <label htmlFor='pais'>Países</label><br></br>
                <DropdownCountries
                   callbackOnChange={handleSelectChange}
                />
                <br></br>
                <br></br>
                <label htmlFor='cidades'>Cidades</label><br></br>
                <DropdownCities
                    callbackOnChange = {handleSelectChange}
                />
                <br></br>
            </form>
        </div>

    </div>  
  )
}

export default Main