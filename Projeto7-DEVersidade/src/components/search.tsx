import React from 'react'

const search = ({search, setSearch}) => {
  return (
    <div >
     
      <input 
        type="text" 
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        placeholder='Pesquisa a sua tarefa'
        className='flex  w-full mb-2'
        />
    </div>
  )
}

export default search
