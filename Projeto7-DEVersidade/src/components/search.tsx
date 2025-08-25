import React from 'react'

const search = ({search, setSearch}) => {
  return (
    <div className=''>
      <h2>Pesquisar Tarefa:</h2>
      <input 
        type="text" 
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        placeholder='Pesquisa a sua tarefa'
        className='flex px-2 w-full m-2'
        />
    </div>
  )
}

export default search
