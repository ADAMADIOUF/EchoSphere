import React, { useState } from 'react'

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <div className='flex justify-center items-center mt-4'>
      <form
        onSubmit={handleSubmit}
        className='flex border-2 border-gray-200 rounded'
      >
        <input
          type='text'
          className='px-4 py-2 w-50 rounded-l'
          placeholder='Search...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type='submit'
          className='flex items-center justify-center px-4 border-l bg-blue-500 text-white rounded-r'
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default Search
