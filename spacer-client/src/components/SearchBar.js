import {useState} from "react";

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="mt-11 flex items-center">
            <input
                type="text"
                placeholder="Search hotels"
                className="w-10/12 ml-6 py-2 px-4 rounded-full border border-blue-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button
                type="submit"
                className="ml-5 py-2 px-4 rounded-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
                Search
            </button>
        </form>
    );
}

export default SearchBar