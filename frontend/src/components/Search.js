import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Search = () => {
  const navigate = useNavigate()
  const { keyword: urlKeyword } = useParams()
  const [keyword, setKeyword] = useState(urlKeyword || '')
  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      setKeyword('')
      navigate(`/search/${keyword}`)
    } else {
      navigate('/')
    }
  }

  return (
    <div className='flex justify-center items-center mt-4'>
      <form
        onSubmit={submitHandler}
        className='flex border-2 border-gray-200 rounded'
      >
        <input
          className='px-4 py-2 w-50 rounded-l'
          type='text'
          name='q'
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
          placeholder='Search Posts...'
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
