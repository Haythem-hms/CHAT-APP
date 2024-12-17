const GenderCheckbox = () => {
  return (
    <div className="flex">
        <div className="form-control">
            <label className={'label gap-2 cursor-pointer'} >
                <span className="label-text text-slate-50" >Male</span>
                <input type="checkbox" className="checkbox border-slate-100"/>
            </label>
        </div>
        <div className="form-control">
            <label className={'label gap-2 cursor-pointer'} >
                <span className="label-text text-slate-50" >Female</span>
                <input type="checkbox" className="checkbox border-slate-100"/>
            </label>
        </div>
    </div>
  )
}
export default GenderCheckbox