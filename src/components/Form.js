import React, { useContext, useState } from "react";
import { PhotoContext } from '../context/PhotoContext'


const Form = ({ searchTerm }) => {
    const { runSearch } = useContext(PhotoContext)
    const [searchEntry, setSearchEntry] = useState("");
    const [searchItem, setSearchItem] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchItem(searchEntry)
        runSearch(searchItem)
    }

    const updateSearchInput = e => {
        setSearchEntry(e.target.value);
    };
    return (
        <>

            <form
                className="search-form"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    name="search"
                    placeholder="Search..."
                    onChange={updateSearchInput}
                    value={searchEntry}
                />
                <button
                    type="submit"

                >
                    Search

                </button>
            </form>


        </>
    );
};

export default Form;
