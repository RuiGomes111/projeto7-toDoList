

export default function ({filter, setfilter}) {
  return (
    <div>
      <select value={filter} onChange={(e)=> setfilter(e.target.value)}>
        <option value="All">Todas</option>
        <option value="completed">Completas</option>
        <option value="Pending">Pendentes</option>
      </select>
    </div>
  )
}


