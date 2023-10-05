import React from 'react'
import { useSearch } from '../../context/search'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {FaSearch} from 'react-icons/fa'

const SearchInput = () => {
    const [values, setValues] = useSearch();
    const navigate =useNavigate()

    const handleSubmit= async(e)=>{
        e.preventDefault();
        try {
            const {data}=await axios.get(
                `/api/v1/product/search/${values.keyword}`);
            setValues({...values, results:data});
            navigate("/search");
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <form className='d-flex' role='search' 
        onSubmit={handleSubmit}>
            <div style={{display:"flex", border:"1px solid #BCBCBC", borderRadius:"5px"}}>
            <input
            style={{border:"none"}}
            className='form-control me-2'
            type='search'
            placeholder='Search Here'
            aria-label='Search'
            value={values.keyword}
            onChange={(e)=>setValues(
                {...values, keyword: e.target.value})}
            />
            <button style={{border:"none", background:"#E1DED8"}} className='btn' type='submit'>
            <FaSearch/>
                </button>
            </div>
            
        </form>
    </div>
  )
}

export default SearchInput